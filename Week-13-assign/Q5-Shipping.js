let typeOfpackage = "overnight";

switch(typeOfpackage) {
    case "standard":
        console.log("Delivery 3-5 days");
        break;
    case "express":
        console.log("Delivery 1-2 days");
        break;
    case "overnight":
        console.log("Delivery Tomorrow");
        break;
    default:
        console.log("Invalid package type");
}