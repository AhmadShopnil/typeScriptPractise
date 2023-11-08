"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // promise
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "Hello world";
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to get data");
            }
        });
    };
    // calling promise data 
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
    });
    getData();
}
