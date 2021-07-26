/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Rate, Typography, Alert } from 'antd';
import styles from './index.module.less';
const LessDisabled = () => {
  return (
    <>
      <div>bug级别：<Rate disabled defaultValue={3} /></div>
      <Alert className={styles.alert} type="error" message={<>描述: 构建ts项目过程中，
        1、应用antd less文件失效并报错；
        2、import styles from './index.less' 的引入方式
        失效<br />
      </>} />
      <Alert className={styles.alert} type="info"
        message={<>
          背景：cra创建的ts项目 webpack内置并且默认不支持less
        </>}
      />
      <Alert
        className={styles.alert}
        message="解决办法"
        description={<>1、ts不认识less文件
          需要全局声明文件react-app-env.d.ts添加
          less模块的声明；<br />2、根路径添加config-override.js 配置lessloader，用到的包 customize-cra 和 react-app-rewired<br />
          3、因为项目默认开启了css module，less文件命名 必须为xxx.module.less</>}

        type="success"
        showIcon
      />
      代码片段：
      <Typography>
        <pre>
          {`const {
            override,
            addDecoratorsLegacy,
            addLessLoader,
            addWebpackAlias
          } = require("customize-cra");
          const path = require("path");
          // 常用Api
          module.exports = override(
            addLessLoader({
              javascriptEnabled: true,
              modifyVars: {
                '@primary-color': '#9254de',
              }
            }),
            addDecoratorsLegacy(),
            addWebpackAlias({
              "@": path.resolve(__dirname, "src"),
              "@public": path.resolve(__dirname, "./public"),
            })
          );`}
        </pre>
      </Typography>
      参考链接：<a href="https://github.com/arackaf/customize-cra/blob/master/api.md">https://github.com/arackaf/customize-cra/blob/master/api.md</a>
    </>
  );
}

export default LessDisabled;