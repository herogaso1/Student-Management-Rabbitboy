import Student from "../models/studentModel.js";

// ⚠️ LƯU Ý QUAN TRỌNG: Trong Node.js, import file nội bộ BẮT BUỘC phải có đuôi .js

// 1. Tạo Student
export const createStudent = async (studentData) => {
  try {
    const student = new Student(studentData);
    await student.save();
    return student;
  } catch (error) {
    throw error;
  }
};
// 2. Lấy tất cả Student
export const getAllStudents = async () => {
  try {
    const students = await Student.find();
    return students;
  } catch (error) {
    throw error;
  }
};
// 3. Lấy 1 Student theo ID
export const getStudentById = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw error;
  }
};
// 4. Cập nhật Student
export const updateStudent = async (studentId, studentData) => {
  try {
    const student = await Student.findByIdAndUpdate(studentId, studentData, {
      new: true,
    });
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw error;
  }
};
// 5. Xóa Student
export const deleteStudent = async (studentId) => {
  try {
    const student = await Student.findByIdAndDelete(studentId);
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw error;
  }
};
