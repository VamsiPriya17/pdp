import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from '../../../util/dbConnect'
import User from '../../../models/User'
import users from '../../../data'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look upname the user from the credentials supplied
        await dbConnect()

        const userSearch = await User.findOne({
          username: req.body.username,
          password: req.body.password,
        })

        //   const user = null
        const user = {
          id: userSearch._id,
          name: userSearch.username,
          password: userSearch.password,
          cart: userSearch.cart,
          orders: userSearch.orders,
          admin: userSearch.admin,
        }
        console.log(user, 'User')
        
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || '123',
})
