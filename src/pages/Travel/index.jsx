import React, { useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { API_URL } from "../../apis/api";

const TravelPage = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  return (
    <div className="about-container">
      <h3>Tour Trải Nghiệm Học Làm Đèn Lồng Hội An tại Thiên Đăng</h3>
      <img src={`${API_URL}/den/Xuong-san-xuat/2.png`} alt="" />
      <p>
        Thiên Đăng hân hạnh giới thiệu tour trải nghiệm đặc biệt, nơi du khách
        không chỉ tham quan mà còn trực tiếp tham gia vào nghệ thuật làm đèn
        lồng truyền thống Hội An.
      </p>
      <h3> Nội Dung Tour:</h3>
      <h5> 1. Học Dán Đèn Lồng</h5>
      <img src={`${API_URL}/den/Xuong-san-xuat/5.png`} alt="" />
      <p>
        Khám phá không gian trang trí đèn lồng rực rỡ, lý tưởng để lưu giữ những
        khoảnh khắc đẹp trong khung cảnh mang đậm nét văn hóa Việt.
      </p>
      <h5> 3. Thưởng Thức Ẩm Thực Văn Hóa</h5>
      <img src={`${API_URL}/den/Xuong-san-xuat/4.png`} alt="" />
      <p>
        Ngoài hoạt động trải nghiệm, du khách còn có cơ hội thưởng thức các món
        ăn địa phương đặc trưng, tăng thêm phần phong phú cho chuyến đi.
      </p>
      <h3> Lợi Ích Cho Khách Hàng</h3>
      <img src={`${API_URL}/den/Xuong-san-xuat/1.png`} alt="" />
      <p>
        • Trải Nghiệm Thực Tế: Hiểu thêm về quy trình thủ công truyền thống của
        người dân Hội An, từ đó cảm nhận sâu sắc văn hóa địa phương.
      </p>
      <p>
        • Kỷ Niệm Độc Đáo: Tự tay làm đèn lồng – món quà lưu niệm ý nghĩa dành
        cho bản thân hoặc làm quà tặng.
      </p>
      <p>
        • Khoảnh Khắc Đáng Nhớ: Không gian đèn lồng rực rỡ và các món ăn địa
        phương giúp lưu giữ những trải nghiệm khó quên về Hội An.
      </p>
      <img src={`${API_URL}/den/Xuong-san-xuat/3.png`} alt="" />
      <p>
        Tour trải nghiệm này là lựa chọn hoàn hảo để du khách khám phá và kết
        nối sâu sắc với văn hóa Hội An. Hãy liên hệ ngay với chúng tôi để đặt
        lịch!{" "}
      </p>
    </div>
  );
};

export default TravelPage;
