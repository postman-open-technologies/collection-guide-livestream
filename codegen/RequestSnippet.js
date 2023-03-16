package main

import (
   "fmt"
   "strings"
   "net/http"
   "io/ioutil"
)

func main() {

   url := "https://google.com"
   method := "POST"

   payload := strings.NewReader(`{'name': 'Debo'}`)

   client := &http.Client {
   }
   req, err := http.NewRequest(method, url, payload)

   if err != nil {
      fmt.Println(err)
      return
   }
   res, err := client.Do(req)
   if err != nil {
      fmt.Println(err)
      return
   }
   defer res.Body.Close()

   body, err := ioutil.ReadAll(res.Body)
   if err != nil {
      fmt.Println(err)
      return
   }
   fmt.Println(string(body))
}