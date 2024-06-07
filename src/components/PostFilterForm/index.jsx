import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKey } from "../../redux/features/product/productSlice";
import { Input } from "antd";
import './style.scss'
import { CloseCircleOutlined } from "@ant-design/icons";

const PostFilterForm = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const searchKey = useSelector(state => state.product.searchKey);
    const [searchTerm, setSearchTerm] = useState(searchKey);
    const typingTimeOutRef = useRef(null);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleClear = () => {
        setSearchTerm("");
        dispatch(setSearchKey(""));

        if (onSubmit) {
            onSubmit({ searchTerm: "" });
        }
    };
    useEffect(() => {
        if (!onSubmit) return;

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            dispatch(setSearchKey(searchTerm));

            const formValues = {
                searchTerm: searchTerm,
            };
            onSubmit(formValues);
        }, 500);

        return () => {
            clearTimeout(typingTimeOutRef.current);
        };
    }, [searchTerm, dispatch, onSubmit]);

    return (
        <form className="input-search">
            <Input
                type="search"
                placeholder="Bạn muốn mua gì"
                value={searchTerm}
                onChange={handleSearchTermChange}
                suffix={<CloseCircleOutlined onClick={handleClear} style={{ color: 'rgba(0,0,0,.45)', cursor: 'pointer' }} />}
            />

        </form>
    );
};

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
};

export default PostFilterForm;
