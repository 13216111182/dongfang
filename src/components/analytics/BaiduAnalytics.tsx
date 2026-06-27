import Script from "next/script";

const BAIDU_HM_ID = "f513862673dfbae1286400dc8eb1033d";

export function BaiduAnalytics() {
  return (
    <Script id="baidu-analytics" strategy="afterInteractive">
      {`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${BAIDU_HM_ID}";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `}
    </Script>
  );
}
