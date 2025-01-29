import prisma from "../src/lib/prisma";
import { DayofWeek, Gender } from "@prisma/client";
import { faker } from "@faker-js/faker";

async function main() {
	await prisma.admin.create({
		data: {
			email: "adityaprasad@gmail.com",
		},
	});

	// GRADE
	for (let i = 1; i <= 6; i++) {
		await prisma.grade.create({
			data: {
				level: i,
			},
		});
	}

	// CLASS
	for (let i = 1; i <= 6; i++) {
		await prisma.class.create({
			data: {
				name: `${i}A`,
				gradeId: i,
				capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
			},
		});
	}

	// SUBJECT
	const subjectData = [
		{ name: "Mathematics" },
		{ name: "Science" },
		{ name: "English" },
		{ name: "History" },
		{ name: "Geography" },
		{ name: "Physics" },
		{ name: "Chemistry" },
		{ name: "Biology" },
		{ name: "Computer Science" },
		{ name: "Art" },
	];
	for (const subject of subjectData) {
		await prisma.subject.create({ data: subject });
	}

	// TEACHER
	for (let i = 1; i <= 15; i++) {
		await prisma.teacher.create({
			data: {
				id: `teacher${i}`, // Unique ID for the teacher
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phone: faker.phone.number(),
				address: {
					create: {
						street: faker.location.street(),
						city: faker.location.city(),
						state: faker.location.state(),
						zipcode: faker.location.zipCode(),
						country: faker.location.country(),
					},
				},
				gender: faker.helpers.arrayElement([
					Gender.MALE,
					Gender.FEMALE,
					Gender.OTHERS,
				]),
				subjects: { connect: [{ id: (i % 10) + 1 }] },
				classes: { connect: [{ id: (i % 6) + 1 }] },
				dob: new Date(
					new Date().setFullYear(new Date().getFullYear() - 30)
				),
			},
		});
	}

	// LESSON
	for (let i = 1; i <= 30; i++) {
		await prisma.lesson.create({
			data: {
				name: `Lesson${i}`,
				day: DayofWeek[
					Object.keys(DayofWeek)[
						Math.floor(
							Math.random() * Object.keys(DayofWeek).length
						)
					] as keyof typeof DayofWeek
				],
				startTime: new Date(
					new Date().setHours(new Date().getHours() + 1)
				),
				endTime: new Date(
					new Date().setHours(new Date().getHours() + 3)
				),
				subjectId: (i % 10) + 1,
				classId: (i % 6) + 1,
				teacherId: `teacher${(i % 15) + 1}`,
			},
		});
	}

	// PARENT
	for (let i = 1; i <= 25; i++) {
		await prisma.parent.create({
			data: {
				id: `parentId${i}`,
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phone: faker.phone.number(),
				gender: faker.helpers.arrayElement([
					Gender.MALE,
					Gender.FEMALE,
					Gender.OTHERS,
				]),
				address: {
					create: {
						street: faker.location.street(),
						city: faker.location.city(),
						state: faker.location.state(),
						zipcode: faker.location.zipCode(),
						country: faker.location.country(),
					},
				},
			},
		});
	}

	// STUDENT
	for (let i = 1; i <= 50; i++) {
		await prisma.student.create({
			data: {
				id: `student${i}`,
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: faker.internet.email(),
				phone: faker.phone.number(),
				gender: faker.helpers.arrayElement([
					Gender.MALE,
					Gender.FEMALE,
					Gender.OTHERS,
				]),
				bloodType: faker.helpers.arrayElement([
					"A+",
					"A-",
					"B+",
					"B-",
					"AB+",
					"AB-",
					"O+",
					"O-",
				]),
				address: {
					create: {
						street: faker.location.street(),
						city: faker.location.city(),
						state: faker.location.state(),
						zipcode: faker.location.zipCode(),
						country: faker.location.country(),
					},
				},
				parent: {
					connect: {
						id: `parentId${Math.ceil(i / 2) % 25 || 25}`, // Connect parent by ID
					},
				},
				grade: {
					connect: {
						id: (i % 6) + 1, // Connect grade by ID
					},
				},
				class: {
					connect: {
						id: (i % 6) + 1, // Connect class by ID
					},
				},
				dob: new Date(
					new Date().setFullYear(new Date().getFullYear() - 10)
				),
			},
		});
	}

	// EXAM
	for (let i = 1; i <= 10; i++) {
		await prisma.exam.create({
			data: {
				title: `Exam ${i}`,
				startTime: new Date(
					new Date().setHours(new Date().getHours() + 1)
				),
				endTime: new Date(
					new Date().setHours(new Date().getHours() + 2)
				),
				lessonId: (i % 30) + 1,
			},
		});
	}

	// ASSIGNMENT
	for (let i = 1; i <= 10; i++) {
		await prisma.assignment.create({
			data: {
				title: `Assignment ${i}`,
				startDate: new Date(
					new Date().setHours(new Date().getHours() + 1)
				),
				dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
				lessonId: (i % 30) + 1,
			},
		});
	}

	// RESULT
	for (let i = 1; i <= 10; i++) {
		await prisma.result.create({
			data: {
				score: 90,
				studentId: `student${i}`,
				...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
			},
		});
	}

	// ATTENDANCE
	for (let i = 1; i <= 10; i++) {
		await prisma.attendance.create({
			data: {
				date: new Date(),
				present: true,
				studentId: `student${i}`,
				lessonId: (i % 30) + 1,
			},
		});
	}

	// EVENT
	for (let i = 1; i <= 5; i++) {
		await prisma.event.create({
			data: {
				title: `Event ${i}`,
				description: `Description for Event ${i}`,
				startTime: new Date(
					new Date().setHours(new Date().getHours() + 1)
				),
				endTime: new Date(
					new Date().setHours(new Date().getHours() + 2)
				),
				classId: (i % 5) + 1,
			},
		});
	}

	// ANNOUNCEMENT
	for (let i = 1; i <= 5; i++) {
		await prisma.announcement.create({
			data: {
				title: `Announcement ${i}`,
				description: `Description for Announcement ${i}`,
				date: new Date(),
				classId: (i % 5) + 1,
			},
		});
	}

	console.log("Seeding completed successfully.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
