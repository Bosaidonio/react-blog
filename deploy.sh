#!/bin/bash

# 项目名
PROJECT_NAME=REACT_BLOG
# 服务器地址
SERVER_IP=121.196.200.255
# 项目存放根目录
PROJECT_ROOT=${SERVER_IP}:/opt/${PROJECT_NAME}
# 项目上传到服务器的目录
ZIP_ROOT=/opt/${PROJECT_NAME}/${PROJECT_NAME}.tar.gz
# 解压目录
UNZIP_ROOT=/opt/${PROJECT_NAME}
echo '<<<---开始部署项目--->>>' \
&& echo '正在删除旧资源...' \
&& rm -rf ./build \
&& echo '删除成功，正在打包中...' \
&& yarn build \
&& echo '打包完成，开始压缩...' \
&& cd ./build \
&& tar -zvcf ${PROJECT_NAME}.tar.gz * \
&& echo '压缩完成，开始上传项目至服务器...' \
&& scp -r ${PROJECT_NAME}.tar.gz root@${PROJECT_ROOT} \
&& echo '上传成功, 开始解压...' \
&& ssh root@${SERVER_IP} "tar -zvxf ${ZIP_ROOT} -C ${UNZIP_ROOT}" \
&& echo '<<<---解压成功,部署完成--->>>'




 