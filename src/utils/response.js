// src/utils/response.js

// Dùng khi xử lý thành công (Mặc định status 200)
export const successResponse = (res, data, message = "Success") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};
// Dùng khi có lỗi (Mặc định status 400 - Bad Request)
export const errorResponse = (
  res,
  message = "Error",
  status = 400,
  errorCode = "ERROR"
) => {
  return res.status(status).json({
    success: false,
    message,
    errorCode,
  });
};
