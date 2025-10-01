# 🎨 DabakDOODLE - where doodles meet K-pop drama 🎶🎬

DabakDOODLE is a **real-time multiplayer drawing and guessing game** inspired by the world of **K-pop and K-drama**.  
Players can choose their theme (K-pop songs 🎵 or K-drama titles 🎥), join a game room, and take turns doodling while others guess.  
It’s like **Pictionary meets K-culture** — fun, fast, and competitive!

---

## 🚀 Features

- 🔗 **Multiplayer support**: 2–4 players per room  
- 🎭 **Theme choice**: Play with **K-pop songs** or **K-dramas**  
- ✏️ **Real-time doodling**: Draw on a shared canvas while others watch  
- 💬 **Live guessing chat**: Players guess the title in real-time  
- 🏆 **Points system**:  
  - Drawer earns points if others *don’t* guess correctly  
  - Guesser earns points if they guess correctly  
- 🔄 **Turn rotation**: Everyone gets a chance to draw  
- ⏱️ **Round timer**: Keep the game moving  
- 🎉 **Leaderboard + Winner screen**  

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ [React.js](https://reactjs.org/) with [Vite](https://vitejs.dev/)  
- 🎨 Canvas API / [Konva.js](https://konvajs.org/) for doodling  
- 💨 [TailwindCSS](https://tailwindcss.com/) for modern UI  
- 🔌 [Socket.IO Client](https://socket.io/) for real-time sync  

### Backend
- 🟢 [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)  
- 🔌 [Socket.IO](https://socket.io/) for WebSockets  
- 🗄️ [MongoDB](https://www.mongodb.com/) (via MongoDB Atlas) for user, room, and score storage  

### Deployment
- 🌐 Frontend → [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)  
- ⚙️ Backend → [Render](https://render.com/) / [Railway](https://railway.app/)  
- ☁️ Database → [MongoDB Atlas](https://www.mongodb.com/atlas)  

---

## 🎮 How to Play

1. Go to the **homepage** and enter your username.  
2. Choose your **theme**:  
   - 🎵 K-pop songs  
   - 🎬 K-drama titles  
3. Select the **number of players** (2, 3, or 4).  
4. Join or create a room.  
5. The first player becomes the **drawer** and is given a random word from the chosen theme.  
6. Drawer doodles 🎨 → other players guess 💬.  
7. Correct guesser + drawer earn points.  
8. Turns rotate until all rounds finish.  
9. Final scores are shown, and the **winner** is crowned 👑.  

---


