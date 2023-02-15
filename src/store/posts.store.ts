import { atom } from "nanostores"

export const posts = atom<IPost[]>([
  {
    id: 1,
    title: "Cyberpunk: EDGERUNNERS",
    author: "dehwyy",
    date: new Date().toDateString().split(" ").slice(1).join(" "),
    authorImage: "https://sun9-42.userapi.com/impg/QiH9W0PobEjVjZsuDwGX5iKnDFuuyI7fGVx_5A/VZxGwaA_u1k.jpg?size=850x1185&quality=95&sign=b515481bffd26e100e8256f7ba4e2b79&type=album",
    previewImage: "https://sun9-54.userapi.com/impg/2eWcvyPtxZTMHF4OyMbesa-ioaNPhlQfAA2Qtw/5avOSPSO9As.jpg?size=2560x1440&quality=95&sign=84f0362b3934f3f2f420dd857ee6a643&type=album",
    previewText: "some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text some uninteresting text",
    theme: "code",
    tags: ["anime", "japanese"]
  },
])
