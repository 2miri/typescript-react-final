const mongoose = require("mongoose");

let isConnected = false; // DB 연결 상태 추적

const initDB = async () => {
  if (isConnected) return; // 이미 연결된 경우, 재시도하지 않음

  try {
    console.log("🚀 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true; // 연결 성공 시 상태 변경
    console.log("🚀 Connected to MongoDB!");
  } catch (error) {
    isConnected = false;
    console.error("❌ MongoDB connection failed:", error);
    setTimeout(initDB, 5000); // 5초 후 재시도
  }
};

// 주기적으로 DB 연결 확인
setInterval(async () => {
  if (!isConnected) {
    console.log("🔄 MongoDB 연결 상태 점검...");
    await initDB(); // 연결 상태가 끊어진 경우 다시 시도
  }
}, 10000); // 10초마다 연결 상태 확인

module.exports = { initDB };
