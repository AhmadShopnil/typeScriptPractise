"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next level Deb";
        return Object.assign(Object.assign({}, student), { course });
    };
    const course1 = addCourseToStudent({
        id: 1,
        name: "Shopnil",
        email: "shopnil@gmail.com",
        skill: "Js"
    });
    const course2 = addCourseToStudent({
        id: 2,
        name: "oby",
        email: "oby@gmail.com",
    });
}
