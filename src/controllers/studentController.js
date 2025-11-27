// Import tất cả hàm từ service
import * as studentService from "../services/studentService.js";
// [POST] Create Student
export const createStudent = async (req, res) => {
  try {
    // req.body: Dữ liệu JSON React gửi lên (giống payload trong axios.post)
    const student = await studentService.createStudent(req.body); // Truy vấn service
    res.status(201).json(student); // Trả về student vừa tạo
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi
  }
};
// [GET] Get All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents(); // Truy vấn service
    res.status(200).json(students); // Trả về danh sách students
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi
  }
};
// [GET] Get Student Detail
export const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id); // Truy vấn service
    res.status(200).json(student); // Trả về student
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi
  }
};
// [PUT] Update Student
export const updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body); // Truy vấn service
    res.status(200).json(student); // Trả về student vừa cập nhật
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi
  }
};
// [DELETE] Delete Student
export const deleteStudent = async (req, res) => {
  try {
    const student = await studentService.deleteStudent(req.params.id); // Truy vấn service
    res.status(200).json(student); // Trả về student vừa xóa
  } catch (error) {
    res.status(500).json({ message: error.message }); // Trả về lỗi
  }
};
