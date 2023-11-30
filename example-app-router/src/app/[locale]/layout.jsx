
// import fetchMethod from "../../api/axios/axiosInstance"
import  "./layout.css";

export default function RootLayout({children , locale}) {
  
  // var loginResult = fetchMethod()

  return <html lang={locale} >
  <head />
  <body>
    {children}
  </body>
</html>
}
