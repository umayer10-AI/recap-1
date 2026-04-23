import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MY_HOME);
const db = client.db("App7-better");

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
        // requireEmailVerification: true,
    },
    database: mongodbAdapter(db, {
        client
    }),
});