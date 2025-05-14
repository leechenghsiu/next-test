# 使用 Node.js 官方鏡像作為基礎
FROM node:20-alpine

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install --legacy-peer-deps

# 複製項目文件
COPY . .

# 構建應用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 啟動命令
CMD ["npm", "start"] 