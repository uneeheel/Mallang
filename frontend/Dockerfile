# 1단계: React 앱을 빌드하는 단계
FROM node:18 AS builder

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 전체 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: nginx로 정적 파일 서빙
FROM nginx:alpine

# 빌드된 파일을 nginx가 기본으로 찾는 경로에 복사
COPY --from=builder /app/build /usr/share/nginx/html

# nginx 기본 포트 오픈
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]
