import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        }
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
    },
    lists: createSchema({
        // Schema items go in here
    }),
    ui: {
        // Show the UI only for people who pass this test
        isAccessAllowed: () => true
        // isAccessAllowed: ({ session }) => {
        //     console.log(session);
        //     return !!session?.data;
        // }
    },
    // Add session values here
    // session: withItemData(statelessSessions(sessionConfig), {
    //     // GraphQL Query
    // }),
});