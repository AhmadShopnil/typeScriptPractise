"use strict";
{
    const age = 15;
    const isAdult = age >= 18 ? "adult" : "You are kid!";
    console.log(isAdult);
    // nulish oparator
    const isAuthinthicate = undefined;
    const user = isAuthinthicate !== null && isAuthinthicate !== void 0 ? isAuthinthicate : "Guest";
    console.log({ user });
}
