"use strict";
{
    const user = {
        id: 12,
        name: {
            firstName: "Shaleh",
            middleName: "ahamad",
            lastName: "shopnil",
            age: "24"
        },
        contactNo: "0122222",
        address: "Tangail"
    };
    const { contactNo, name: { firstName: fstName }, // alias firstName to fstName
     } = user;
}
