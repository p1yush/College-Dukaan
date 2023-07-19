<!-- Server API Route -->

# Authentication Routes

base url : http://localhost:4000
login : post(/api/v1/user/login)
register : post(/api/v1/user/register)
forgot password - post(/api/v1/user/forgotpassword)
reset password - put(/api/v1/user/resetpassword)
getMySelf : get(/api/v1/user/getmyself)
getSpecificUser : get(/api/v1/user/getSpecificUser/:userId)
updateUserDetails - put(/api/v1/user/update/)
deleteUser - delete(/api/v1/user/deleteuser/:userId)

# Products Routes

create product - post(api/v1/products/createproduct)
get all products - get(api/v1/products/)
get a specific products - get(api/v1/products/:productId)
getProductsOfSpecificUser - get(api/v1/products/:userId)
updateProduct - put(/api/v1/products/update/:productId)
deleteProducts - delete(/api/v1/product/:productId)

# images Routes

upload images to cloudinary

upload image -
