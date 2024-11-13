import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

const ConvertLinkWithAPI = () => {
    const [inputLink, setInputLink] = useState("");
    const [userGeneratedLink, setUserGeneratedLink] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Hàm tải Google API Client
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({
                client_id: "130769629526-ap0l5qfq10rn4pt9rj67n9np3rv6tg6t.apps.googleusercontent.com", // Thay YOUR_GOOGLE_CLIENT_ID bằng Client ID của bạn
            });
        });
    }, []);

    // Hàm xác thực người dùng
    const handleSignIn = () => {
        gapi.auth2.getAuthInstance().signIn().then(() => {
            setIsAuthenticated(true);
        });
    };

    // Hàm chuyển đổi link Google Drive thành link ảnh
    const convertToImageUrl = (link) => {
        const regex = /(?:https:\/\/drive\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)(?:\/.*)?/;
        const match = link.match(regex);
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
        return null;
    };

    // Hàm lấy link từ Google Drive API
    const fetchImageUrlFromDrive = async (fileId) => {
        try {
            const response = await gapi.client.drive.files.get({
                fileId: fileId,
                fields: "webViewLink", // Trả về liên kết xem web của tệp
            });
            return response.result.webViewLink;
        } catch (error) {
            console.error("Lỗi khi lấy file từ Google Drive:", error);
            return null;
        }
    };

    // Hàm xử lý chuyển đổi và lấy link
    const handleGetLink = async () => {
        const imageUrl = convertToImageUrl(inputLink);
        if (imageUrl) {
            const fileId = imageUrl.split("id=")[1];
            const googleImageLink = await fetchImageUrlFromDrive(fileId);
            setUserGeneratedLink(googleImageLink);
        } else {
            alert("Link không hợp lệ!");
        }
    };

    return (
        <div>
            <h1>Chuyển đổi Link Google Drive thành Link Hình ảnh</h1>
            {!isAuthenticated ? (
                <button onClick={handleSignIn}>Đăng nhập với Google</button>
            ) : (
                <>
                    <input
                        type="text"
                        value={inputLink}
                        onChange={(e) => setInputLink(e.target.value)}
                        placeholder="Nhập link chia sẻ Google Drive"
                    />
                    <button onClick={handleGetLink}>Lấy Link ảnh</button>
                </>
            )}
            <div>
                {userGeneratedLink && (
                    <div>
                        <h3>Link ảnh đã tạo:</h3>
                        <p>{userGeneratedLink}</p>
                        <h3>Ảnh hiển thị:</h3>
                        <img
                            src={userGeneratedLink}
                            alt="Google Drive Image"
                            style={{ width: "100%", maxWidth: "500px" }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConvertLinkWithAPI;
