import { connectToDB } from "../mongoose";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}
export async function createThread({text, author, communityId, path}: Params) {
    connectToDB();

    // const createThread = await Thread.create();
}