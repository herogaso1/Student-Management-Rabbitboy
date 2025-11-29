// Import tất cả hàm từ service
import * as studentService from "../services/studentService.js";
import { successResponse, errorResponse } from "../utils/response.js";
// [POST] Create Student
export const createStudent = async (req, res) => {
  try {
    // req.body: Dữ liệu JSON React gửi lên (giống payload trong axios.post)
    const student = await studentService.createStudent(req.body); // Truy vấn service
    //tạo validate cho student >18 tuổi
    if (student.age < 18) {
      return errorResponse(
        res,
        "Student must be at least 18 years old",
        400,
        "INVALID_AGE"
      );
    }
    return successResponse(res, student, "Student created successfully"); // Trả về student vừa tạo
  } catch (error) {
    return errorResponse(res, error.message, 500, "INTERNAL_SERVER_ERROR"); // Trả về lỗi
  }
};
// [GET] Get All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents(); // Truy vấn service
    return successResponse(res, students, "Students retrieved successfully"); // Trả về danh sách students
  } catch (error) {
    return errorResponse(res, error.message, 500, "INTERNAL_SERVER_ERROR"); // Trả về lỗi
  }
};
// [GET] Get Student Detail
export const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id); // Truy vấn service
    return successResponse(res, student, "Student retrieved successfully"); // Trả về student
  } catch (error) {
    return errorResponse(res, error.message, 500, "INTERNAL_SERVER_ERROR"); // Trả về lỗi
  }
};
// [PUT] Update Student
export const updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body); // Truy vấn service
    return successResponse(res, student, "Student updated successfully"); // Trả về student vừa cập nhật
  } catch (error) {
    return errorResponse(res, error.message, 500, "INTERNAL_SERVER_ERROR"); // Trả về lỗi
  }
};
// [DELETE] Delete Student
export const deleteStudent = async (req, res) => {
  try {
    const student = await studentService.deleteStudent(req.params.id); // Truy vấn service
    return successResponse(res, student, "Student deleted successfully"); // Trả về student vừa xóa
  } catch (error) {
    return errorResponse(res, error.message, 500, "INTERNAL_SERVER_ERROR"); // Trả về lỗi
  }
};
