import React, { useEffect } from "react";
import './style.scss'
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const params = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])

  return (
    <div className="about-container">
      <h3>Đèn Lồng: Ánh Sáng của Văn Hóa và Truyền Thống </h3>
      <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/11/8/852676/Trang-Tri-Phong-Tro-.jpg" alt="" />
      <p>Treo đèn lồng là một phong tục lâu đời và giàu ý nghĩa ở nhiều nền văn hóa châu Á, đặc biệt là ở Trung Quốc, Nhật Bản và Việt Nam. Đèn lồng không chỉ mang lại ánh sáng vật lý mà còn chứa đựng nhiều giá trị tinh thần và văn hóa sâu sắc. Bài viết này sẽ khám phá các khía cạnh ý nghĩa của việc treo đèn lồng và cách chúng đã góp phần vào việc bảo tồn và truyền bá những giá trị văn hóa truyền thống.</p>
      <h3> Lịch Sử và Nguồn Gốc</h3>
      <img src="https://file.hstatic.net/200000507187/article/mau-decor-trang-tri-phong-tro-sinh-vien-31_e92b0d5bd49c4ebbbaf7600c35344646.jpg" alt="" />
      <p>Đèn lồng có lịch sử lâu đời, bắt đầu từ Trung Quốc cổ đại, nơi chúng được sử dụng trong các lễ hội, tôn giáo và nghi lễ. Theo thời gian, việc sử dụng đèn lồng đã lan rộng sang nhiều quốc gia khác và trở thành một phần không thể thiếu của văn hóa châu Á.
      </p>
      <p>Ở Trung Quốc, đèn lồng xuất hiện từ thời kỳ Tây Hán (206 TCN – 25 SCN). Chúng ban đầu được sử dụng để chiếu sáng nhưng sau đó trở thành biểu tượng của sự may mắn và hạnh phúc.
      </p>
      <p>Ở Nhật Bản, đèn lồng được gọi là "chōchin" và thường được sử dụng trong các đền thờ và lễ hội. Chúng thể hiện sự tôn kính đối với các thần linh và linh hồn tổ tiên.</p>
      <p>Ở Việt Nam, đèn lồng thường xuất hiện trong các lễ hội như Tết Trung Thu và Tết Nguyên Đán, biểu tượng cho sự đoàn tụ gia đình và hy vọng vào một năm mới thịnh vượng.</p>
      <h3>Ý Nghĩa Văn Hóa và Tâm Linh</h3>
      <img src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/144804/Originals/i9sqnszashn71.png" alt="" />
      <p>Ánh Sáng của Hi Vọng: Đèn lồng thường được thắp sáng trong các lễ hội và dịp quan trọng, tượng trưng cho ánh sáng dẫn đường và hi vọng. Chúng mang đến sự lạc quan và khích lệ con người vượt qua khó khăn trong cuộc sống.
      </p>
      <p>Sự Đoàn Tụ và Gắn Kết: Đèn lồng là biểu tượng của sự đoàn tụ và gắn kết gia đình. Trong các lễ hội như Tết Trung Thu, các gia đình thường cùng nhau làm đèn lồng và thắp sáng, thể hiện tinh thần đoàn kết và yêu thương.</p>
      <p>Bảo Tồn Truyền Thống: Việc làm và treo đèn lồng là cách để các thế hệ sau ghi nhớ và bảo tồn các giá trị truyền thống. Nó giúp gắn kết con người với cội nguồn và lịch sử của mình.
      </p>
      <h3>Biểu Tượng của Sự May Mắn và Bình An</h3>
      <p>Trong nhiều nền văn hóa, đèn lồng được coi là biểu tượng của sự may mắn và bình an. Người ta tin rằng ánh sáng từ đèn lồng sẽ xua tan tà ma và mang lại sự an lành cho gia đình.</p>
      <p>Ở Trung Quốc, đèn lồng đỏ thường được treo trong các dịp cưới hỏi và năm mới, tượng trưng cho sự hạnh phúc và thịnh vượng.
      </p>
      <p>Ở Nhật Bản, đèn lồng thường được treo ở các đền thờ để cầu nguyện cho sự bình an và thịnh vượng cho cả gia đình.
      </p>

      <h3>  Ảnh Hưởng Đến Nghệ Thuật và Văn Hóa Đương Đại</h3>
      <img src="https://admin.tamshoppe.vn/Web/Resources/Uploaded/2/images/bai-viet/1.jpeg" alt="" />
      <p>Đèn lồng không chỉ tồn tại trong các phong tục truyền thống mà còn ảnh hưởng đến nghệ thuật và văn hóa đương đại. Chúng trở thành nguồn cảm hứng cho nhiều tác phẩm nghệ thuật, thiết kế và sự kiện văn hóa hiện đại.
      </p>
      <p>Nghệ Thuật Đương Đại: Đèn lồng được sử dụng trong nhiều tác phẩm nghệ thuật và trình diễn đương đại, tạo nên sự kết hợp giữa truyền thống và hiện đại.</p>

      <p>Sự Kiện Văn Hóa: Nhiều lễ hội đèn lồng hiện đại không chỉ có sự tham gia của người dân địa phương mà còn thu hút du khách quốc tế, giúp quảng bá văn hóa và du lịch.</p>
    </div>
  );
};

export default AboutPage;
