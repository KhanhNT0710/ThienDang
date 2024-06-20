import React, { useEffect, useState } from "react";
import { formatNumber } from "../../utils/formatNumber";
import { Col, Row } from "antd";
import { useNavigate, useParams, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../constants/routes";
import { actFetchAllImgsProducts, actFetchAllProducts, actFetchProductById } from "../../redux/features/product/productSlice";
import { actFetchUserById } from "../../redux/features/user/userSlice";
import './style.scss'
const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { productInfo } = useSelector((state) => state.product);
  const { imgURL, style, name, category, id, evaluate } = productInfo;
  const { imgsProducts } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);
  const { fullName, user, phoneNumber, email, avatarURL } = userInfo;
  const { pagination } = useSelector((state) => state.comment);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const { products } = useSelector((state) => state.product);

  const productsClone = [...products];
  console.log(productsClone, "productsClone");
  useEffect(() => {
    dispatch(actFetchProductById(params.productId));
    dispatch(actFetchUserById(userInfo.id));
    dispatch(actFetchAllImgsProducts());

    // eslint-disable-next-line
  }, [params.productId]);

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
  const renderRelatedProductList = (productsClone) => {
    return productsClone.map((product) => {
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
  return (
    <div>
      <div>
        <h3>      Hướng Dẫn Sử Dụng Lồng Đèn Cho Ngày Hội Trăng Rằm</h3>
        <p>Lồng đèn là một phần không thể thiếu trong các dịp lễ hội truyền thống ở nhiều quốc gia châu Á, đặc biệt là trong ngày Trung Thu. Đây không chỉ là một biểu tượng của sự may mắn và hạnh phúc, mà còn mang lại vẻ đẹp lung linh, huyền ảo cho những đêm trăng rằm. Hãy cùng tìm hiểu cách sử dụng lồng đèn một cách an toàn và thú vị qua bài viết dưới đây!</p>

        <h4>1. Chọn Lồng Đèn Phù Hợp</h4>
        Hiện nay, có rất nhiều loại lồng đèn với đa dạng mẫu mã và chất liệu. Bạn có thể chọn lồng đèn giấy, lồng đèn nhựa hoặc lồng đèn gỗ. Một số điểm cần lưu ý khi chọn lồng đèn:

        Chất liệu an toàn: Nên chọn lồng đèn làm từ vật liệu không dễ cháy và an toàn cho trẻ em.
        Kích thước: Lồng đèn nhỏ gọn sẽ phù hợp hơn cho trẻ em và dễ dàng di chuyển.
        Thiết kế: Chọn những mẫu lồng đèn có thiết kế đẹp mắt, phù hợp với chủ đề của lễ hội.

        Hình ảnh: Lồng đèn đa dạng mẫu mã cho ngày hội trăng rằm.

        <h4>2. Lắp Đặt Lồng Đèn</h4>
        Để lắp đặt lồng đèn, bạn có thể thực hiện theo các bước sau:

        Mở lồng đèn: Lồng đèn thường được gập gọn khi mua, bạn cần mở rộng và kiểm tra kỹ các khớp nối.
        Lắp đèn cầy hoặc đèn LED: Đèn cầy truyền thống mang lại ánh sáng ấm áp, nhưng đèn LED lại an toàn hơn và có thể thay đổi màu sắc. Nếu sử dụng đèn cầy, hãy chắc chắn rằng nó được gắn chắc chắn và cách xa các vật liệu dễ cháy.
        Kiểm tra dây treo: Đảm bảo dây treo chắc chắn để lồng đèn không bị rơi khi di chuyển.
        <h4>3. Sử Dụng Lồng Đèn</h4>
        Để sử dụng lồng đèn an toàn và hiệu quả, bạn cần lưu ý các điểm sau:

        Tránh gió mạnh: Khi cầm lồng đèn ngoài trời, nên tránh các khu vực có gió mạnh để đèn không bị tắt hoặc ngã đổ.
        Giữ khoảng cách an toàn: Đối với lồng đèn sử dụng đèn cầy, cần giữ khoảng cách với các vật liệu dễ cháy như giấy, quần áo.
        Thực hiện dưới sự giám sát của người lớn: Trẻ em cần được giám sát để đảm bảo an toàn khi sử dụng lồng đèn.
        <h4>4. Các Lưu Ý Khi Sử Dụng Lồng Đèn</h4>
        Không để lồng đèn cháy suốt đêm: Nếu bạn để lồng đèn trang trí trong nhà, hãy tắt đèn trước khi đi ngủ để tránh nguy cơ cháy nổ.
        Kiểm tra đèn trước khi sử dụng: Đối với đèn LED, hãy kiểm tra pin và các kết nối điện trước khi sử dụng.
        Bảo quản lồng đèn đúng cách: Sau khi sử dụng, nên gấp gọn và bảo quản lồng đèn ở nơi khô ráo, thoáng mát để sử dụng cho các dịp lễ hội khác.

        Hình ảnh: Trẻ em hào hứng sử dụng lồng đèn trong đêm Trung Thu.

        <h4> 5. Tạo Niềm Vui Cùng Lồng Đèn</h4>
        Lồng đèn không chỉ là vật trang trí, mà còn là một phần của những ký ức đẹp trong dịp lễ hội. Hãy cùng gia đình và bạn bè tận hưởng những khoảnh khắc vui vẻ, đầm ấm dưới ánh sáng lung linh của lồng đèn.

        Bạn có thể tổ chức các hoạt động như diễu hành lồng đèn, kể chuyện cổ tích hoặc tham gia các trò chơi truyền thống để tạo nên một đêm Trung Thu thật ý nghĩa và đáng nhớ.

        Kết Luận
        Việc sử dụng lồng đèn không chỉ mang lại niềm vui mà còn giúp chúng ta duy trì và phát huy những giá trị văn hóa truyền thống. Hãy luôn tuân thủ các nguyên tắc an toàn và tận hưởng khoảnh khắc tuyệt vời cùng những chiếc lồng đèn lung linh trong đêm Trung Thu.

        Chúc bạn và gia đình có một mùa lễ hội Trung Thu tràn đầy niềm vui và hạnh phúc!
      </div>

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
          <h3>Sản Phẩm Liên Quan</h3>
        </Col>

        <Row className="detail-product-card-bottom__related-products-grp-item-grp">
          {renderRelatedProductList(productsClone)}
        </Row>
      </div>
    </div>

  );

};

export default BlogPage;
