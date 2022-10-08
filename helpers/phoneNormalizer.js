const phoneNormalizer = (phone) => {
    return phone.replaceAll("+","").replaceAll(" ","").replaceAll("(","").replaceAll(")","").replaceAll("-","");
}

module.exports = phoneNormalizer;