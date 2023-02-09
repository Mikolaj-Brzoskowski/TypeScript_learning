var Category;
(function (Category) {
    Category["IMPORTANT"] = "important";
    Category["DONE"] = "done";
    Category["LOW_PRIORITY"] = "low priority";
})(Category || (Category = {}));
;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
    Gender[Gender["UNKNOWN"] = 3] = "UNKNOWN";
})(Gender || (Gender = {}));
export { Category, Gender };
