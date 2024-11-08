import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Image,
    Input,
    InputNumber,
    Pagination,
    Rate,
    Row,
    Select,
} from "antd";
import { CarOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Link, generatePath, useNavigate, useParams } from "react-router-dom";
import {
    actFetchAllProducts,
    actFetchProductById,
} from "../../redux/features/product/productSlice";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { actAddProductToCarts } from "../../redux/features/cart/cartSlice";
import { makeRandomId } from "../../utils/makeRandomId";

import { actFetchUserById } from "../../redux/features/user/userSlice";
import dayjs from "dayjs";
import "./style.scss";
import { ROUTES } from "../../constants/routes";
import Slider from "react-slick";

const schema = Yup.object().shape({
    style: Yup.string().required("Please choose style"),
});

const schemaBoxReview = Yup.object().shape({
    star: Yup.string().required("Please choose start"),
});

const DetailProductCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { productInfo } = useSelector((state) => state.product);

    const { imgsProducts } = useSelector((state) => state.product);
    const { userInfo } = useSelector((state) => state.user);
    const { fullName, user, phoneNumber, email, avatarURL } = userInfo;
    const { comments } = useSelector((state) => state.comment);
    const { commentsCalcuStarAverage } = useSelector((state) => state.comment);
    const { pagination } = useSelector((state) => state.comment);
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    const { products } = useSelector((state) => state.product);
    const product_id = window.location.pathname.split('/')[2];
    const [quantityProduct, setQuantityProduct] = useState(1);
    const [isShowBoxReview, setIsShowBoxReview] = useState(false);
    const methods = useForm({
        defaultValues: {
            style: "",
        },
        resolver: yupResolver(schema),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    const {
        handleSubmit: handleSubmitBoxReview,
        control: controlBoxReview,
        formState: { errors: errorsBoxReview },
    } = useForm({
        defaultValues: {
            star: "",
            comment: "",
        },
        resolver: yupResolver(schemaBoxReview),
    });

    const imgsProduct = imgsProducts?.find(
        (item) => item.id === productInfo.imgProductId
    );
    const [largeImg, setLargeImg] = useState(imgsProduct?.imgProduct1);
    const handleChangeImg = (imgPath) => {
        setLargeImg(imgPath);
    };

    useEffect(() => {
        setLargeImg(imgsProduct?.imgProduct1);
    }, [imgsProduct]);
    useEffect(() => {
        dispatch(actFetchProductById(product_id));

    }, [product_id]);

    console.log(productInfo, "productInfo");

    useEffect(() => {
        dispatch(actFetchAllProducts(params.productId));
        dispatch(actFetchUserById(userInfo.id));

        // eslint-disable-next-line
    }, []);
    console.log(productInfo, "productInfo");

    useEffect(
        () => {
            dispatch(
                actFetchAllProducts({
                    ...params,
                    _sort: "star",
                    _order: "asc",
                    category: productInfo.category,
                })
            );
        },
        // eslint-disable-next-line
        [productInfo.category]
    );
    // const productsListRelated = products; //viết như này sẽ lỗi, phải clone ra
    const productsClone = [...products];
    const indexThisProduct = productsClone.findIndex((product) => {
        return parseFloat(params.productId) === product.id;
    });
    productsClone.splice(indexThisProduct, 1);
    const relatedProductList = productsClone.slice(0, 4);

    const onValid = (formValueOrder) => {
        dispatch(
            actAddProductToCarts({
                ...productInfo,
                ...formValueOrder,
                quantity: quantityProduct,
                idProduct: productInfo.id,
                id: makeRandomId(),
            })
        );
    };

    const onValidBoxReview = (formValueBoxReview) => {
        const valueCommentBox = {
            ...formValueBoxReview,
            fullName,
            userName: user,
            phoneNumber,
            email,
            avatarURL,
            dateComment: dayjs(new Date()).format("DD/MM/YYYY"),
        };

        if (isLogin) {
            let sumStar = Number(valueCommentBox.star);
            let resultStarAverage = commentsCalcuStarAverage.length ? 0 : sumStar;
            commentsCalcuStarAverage.forEach((comment) => {
                sumStar += parseFloat(comment?.star);
                resultStarAverage = Math.round(sumStar / (commentsCalcuStarAverage.length + 1));
                return resultStarAverage;
            });


        } else {
            alert("Vui lòng đăng nhập để đánh giá!");
            navigate(ROUTES.LOGIN_PAGE);
        }
        setIsShowBoxReview(!isShowBoxReview);
    };

    // để gọi ra comments đúng với sp đc comments
    // chú ý truyền vô params cái id là id của sp => fil ra
    useEffect(() => {

        // eslint-disable-next-line
    }, [params.productId]);


    // useEffect(() => {
    //   const productUpdate = {
    //     ...productInfo,
    //     star: result,
    //   };
    //   dispatch(actUpdateProductById({ id: params.productId, productUpdate }));
    //   // eslint-disable-next-line
    // }, [result]);

    const formatNumber = (num) => {
        let numString = "";
        while (num > 0) {
            let div = num % 1000;
            num = Math.floor(num / 1000);
            if (num !== 0) {
                if (div < 10) {
                    div = "00" + div;
                } else if (div < 100) {
                    div = "0" + div;
                }
                numString = "." + div + numString;
            } else {
                numString = div + numString;
            }
        }
        return numString;
    };

    const onChangeQuantityProduct = (value) => {
        setQuantityProduct(value);
    };

    const handleToggleBoxReview = () => {
        setIsShowBoxReview(!isShowBoxReview);
    };

    const handleChangePage = (newPage) => {

    };

    // };

    const renderComments = (comments) => {
        return comments.map((comment) => {
            return (
                <div
                    key={comment.id}
                    className="detail-product-card-comment__review--item"
                >
                    <div className="detail-product-card-comment__review--avatar-user">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s" alt="" />
                    </div>
                    <div className="detail-product-card-comment__review--grp-right">
                        <div className="detail-product-card-comment__review--user-name">
                            <p>{comment?.fullName}</p>
                        </div>
                        <div className="detail-product-card-comment__review--star">
                            <Rate value={comment?.star} />
                        </div>
                        <div className="detail-product-card-comment__review--comment">
                            <p>{comment?.comment}</p>
                        </div>
                        <div className="detail-product-card-comment__review--date-comment">
                            <p>Ngày: {comment?.dateComment}</p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderRelatedProductList = (relatedProductList) => {
        return relatedProductList.map((product) => {
            const handleRedirectToRelatedDetailProductPage = () => {
                navigate(generatePath(ROUTES.DETAIL_PRODUCT_PAGE, { productId: product?.id }));
            };

            return (
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    className="detail-product-card-bottom__related-products-grp-item"
                >
                    <img
                        className="detail-product-card-bottom__related-products-grp-item--img"
                        src={product.imgURL}
                        alt=""
                        onClick={handleRedirectToRelatedDetailProductPage}
                    />
                    <div className="detail-product-card-bottom__related-products-grp-item--name" onClick={handleRedirectToRelatedDetailProductPage}>
                        <p>{product?.name}</p>
                    </div>
                    <div className="detail-product-card-bottom__related-products-grp-item--price">
                        <p>{formatNumber(product?.price)}</p>
                    </div>
                </Col>
            );
        });
    };
    const ImageSlider = ({ urls, API_URL }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const SamplePrevArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <button
                    className={className}
                    style={{ ...style, display: "block", left: "10px", top: "50%" }}
                    onClick={onClick}
                >
                    &lt;
                </button>
            );
        };

        const SampleNextArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <button
                    className={className}
                    style={{ ...style, display: "block", right: "10px", top: "50%" }}
                    onClick={onClick}
                >
                    &gt;
                </button>
            );
        };

        const settings = {
            infinite: urls && urls.length > 1,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
            nextArrow: urls && urls.length > 1 ? <SampleNextArrow /> : null,
            prevArrow: urls && urls.length > 1 ? <SamplePrevArrow /> : null,
        };

        // Kiểm tra nếu urls tồn tại và có chiều dài
        if (!urls || urls.length === 0) {
            return <p>No images available</p>;
        }

        return (
            <div className="image-slider">
                <Slider {...settings}>
                    {urls.map((image, index) => (
                        <div key={index} className="slider-image">
                            <Image
                                loading="lazy"
                                src={image}
                                alt={`Image ${index + 1}`}
                                style={{ width: "100%" }}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="slide-number">
                    {currentIndex + 1} / {urls.length}
                </div>
            </div>
        );
    };



    return (
        <div className="detail-product-card-wrapper">
            <div className="detail-product-card-container">
                <div className="detail-product-card-top-wrapper">
                    <div className="detail-product-card-top">
                        <div className="product-images">
                            <ImageSlider urls={productInfo?.urls} />
                        </div>
                        <form
                            onSubmit={handleSubmit(onValid)}
                            style={{
                                width: "70%",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                justifySelf: "center"
                            }}
                        >
                            <div className="detail-product-card-top__product-name">
                                <h3>{productInfo.name}</h3>
                            </div>

                            <div className="detail-product-card-top__product-color">
                                <div className="detail-product-card-top__product-color-title">
                                    <h4>Thể loại: {productInfo?.style} </h4>
                                </div>

                            </div>

                            <div className="detail-product-card-top__btn-add-cart">
                                <a target="_blank" href="https://zalo.me/0988015093"><Button >Liên hệ mua hàng</Button></a>
                            </div>
                        </form>

                        <div className="detail-product-card-top__shipping-warranty-grp">
                            <div className="detail-product-card-top__shipping">
                                <span>
                                    <CarOutlined />
                                </span>
                                <p>Free Shipping</p>
                            </div>

                            <div className="detail-product-card-top__warranty-return">
                                <span>
                                    <SafetyCertificateOutlined />
                                </span>
                                <p>Chứng nhận sản phẩm OCOP</p>
                                <img src="https://image.nhandan.vn/w800/Uploaded/2024/rktmgt/2023_11_02/logo-ocop-5-4441.jpg.webp" alt="" style={{ width: "100px" }} />
                            </div>
                        </div>
                        <div className="detail-product-card-comment__name-product">
                            <p>Chi tiết sản phẩm: {productInfo.productDetail}</p>
                        </div>
                    </div>
                </div>



                <div className="detail-product-card-comment-wrapper">
                    <div className="detail-product-card-comment">
                        <div className="detail-product-card-comment__name-product">
                            <p>Reviews sản phẩm: {productInfo.name}</p>
                        </div>

                        <div className="detail-product-card-comment__star-average">
                            <div className="detail-product-card-comment__star-average--star">
                                <div className="detail-product-card-comment__star-average--title-review">
                                    <p>Đánh giá sản phẩm:</p>
                                </div>
                                <div className="detail-product-card-comment__star-average--star-avg">
                                    <Rate value={5} />
                                </div>

                            </div>
                            <div className="detail-product-card-comment__star-average--grp-btn-open-review-box">
                                <div className="detail-product-card-comment__star-average--question">
                                    <p>Bạn muốn để lại đánh giá sản phẩm này?</p>
                                </div>
                                <div className="detail-product-card-comment__star-average--btn">
                                    <Button onClick={handleToggleBoxReview}>
                                        Gửi đánh giá
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`detail-product-card-comment__box-review-wrapper ${isShowBoxReview ? "detail-product-card-comment__show-box" : ""
                                }`}
                        >
                            <form
                                className="detail-product-card-comment__box-review"
                                onSubmit={handleSubmitBoxReview(onValidBoxReview)}
                            >
                                <div className="detail-product-card-comment__box-review--img-product">
                                    {productInfo && productInfo.urls && productInfo.urls.length > 0 ? (
                                        <img src={productInfo.urls[0]} alt="Product Image" />
                                    ) : (
                                        <p>No image available</p> // Hoặc một hình ảnh thay thế
                                    )}                                </div>
                                <div className="detail-product-card-comment__box-review--name-product" style={{ textAlign: "center" }}>
                                    <p>{productInfo.name}</p>
                                </div>
                                <div
                                    className="detail-product-card-comment__box-review--your-rate"
                                    style={{ display: "flex", flexDirection: "column" }}
                                >
                                    <Controller
                                        control={controlBoxReview}
                                        name="star"
                                        render={({ field }) => {
                                            return (
                                                <Rate
                                                    style={{ display: "flex", justifyContent: "center" }}
                                                    {...field}
                                                />
                                            );
                                        }}
                                    />
                                    {!!errorsBoxReview.star?.message && (
                                        <p style={{ color: "red", padding: "0px 10px" }}>
                                            {errorsBoxReview.star?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="detail-product-card-comment__box-review--comment">
                                    <Controller
                                        control={controlBoxReview}
                                        name="comment"
                                        render={({ field }) => {
                                            return (
                                                <Input
                                                    placeholder="Please enter your review about this product..."
                                                    {...field}
                                                />
                                            );
                                        }}
                                    />
                                </div>
                                <div className="detail-product-card-comment__box-review--btn-done">
                                    <Button htmlType="submit">Done</Button>
                                </div>
                            </form>
                        </div>

                        <div className="detail-product-card-comment__reviews-grp">
                            <div className="detail-product-card-comment__review">
                                {renderComments(comments)}
                            </div>
                        </div>

                        <div className="detail-product-card-comment__reviews-pagination">
                            <Pagination
                                pageSize={pagination.limitPerPage}
                                current={pagination.currentPage}
                                total={pagination.total}
                                onChange={handleChangePage}
                            />
                        </div>
                        <div className="detail-product-card-bottom-wrapper">
                            <Row className="detail-product-card-bottom">
                                <div
                                    style={{ paddingLeft: 20, paddingRight: 20 }}
                                    className="detail-product-card-bottom__related-products-grp"
                                >
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        className="detail-product-card-bottom__related-products-grp--title"
                                    >
                                        {/* <h3>Sản Phẩm Liên Quan</h3> */}
                                    </Col>

                                    {/* <Row className="detail-product-card-bottom__related-products-grp-item-grp">
                                        {renderRelatedProductList(relatedProductList)}
                                    </Row> */}
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DetailProductCard;
