import express from "express";

// Import các hàm xử lý từ controller (có đuôi .js)
import * as studentController from "../controllers/studentController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *         - phone
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated student ID
 *         name:
 *           type: string
 *           description: Student name
 *         email:
 *           type: string
 *           description: Student email
 *         age:
 *           type: number
 *           description: Student age
 *         phone:
 *           type: string
 *           description: Student phone number
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           description: Student skills
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         _id: 507f1f77bcf86cd799439011
 *         name: Nguyễn Văn A
 *         email: nguyenvana@example.com
 *         age: 20
 *         phone: "0123456789"
 *         skills: ["JavaScript", "React", "Node.js"]
 */

// Định nghĩa các route
// GET /api/students
/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/", studentController.getAllStudents);

// GET /api/students/:id
/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.get("/:id", studentController.getStudentById);

// POST /api/students
/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - age
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 example: Nguyễn Văn A
 *               email:
 *                 type: string
 *                 example: nguyenvana@example.com
 *               age:
 *                 type: number
 *                 example: 20
 *               phone:
 *                 type: string
 *                 example: "0123456789"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "React", "Node.js"]
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Invalid input
 */
router.post("/", studentController.createStudent);

// PUT /api/students/:id
/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Nguyễn Văn B
 *               email:
 *                 type: string
 *                 example: nguyenvanb@example.com
 *               age:
 *                 type: number
 *                 example: 21
 *               phone:
 *                 type: string
 *                 example: "0987654321"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Python", "Django", "MongoDB"]
 *     responses:
 *       200:
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.put("/:id", studentController.updateStudent);

// DELETE /api/students/:id
/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentController.deleteStudent);

export default router;
