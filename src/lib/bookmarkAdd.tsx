import axios from "axios";

export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res = await axios.post(`/api/bookmarks`, bookmark)
    return res.data
}