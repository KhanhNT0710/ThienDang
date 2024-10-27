import React, { useState } from "react";
import "./style.scss"
import ImageList from "../../upload/ImageList";
import CategoryUpload from "../../upload/CategoryUpload";
import ProductUpload from "../../upload/ProductUpload";
const ManaProduct = () => {
    const [refresh, setRefresh] = useState(false)
    return (
        <div className="manaproduct-container">
            <CategoryUpload refresh={refresh} setRefresh={setRefresh} />
            <ProductUpload refresh={refresh} setRefresh={setRefresh} />
            <ImageList refresh={refresh} setRefresh={setRefresh} />

        </div>
    )
}
export default ManaProduct