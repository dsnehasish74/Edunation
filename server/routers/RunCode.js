var unirest = require("unirest");
const request = require('request');
var axios = require('axios');
const express=require("express");
const router=express.Router();

router.get("/run",async(req2,res2)=>{
      try{
            console.log("Inside router get run !!!");
            
            var data = JSON.stringify({
                  "code":`
                  import java.io.BufferedReader;
                  import java.io.IOException;
                  import java.io.InputStreamReader;
                  import java.io.PrintWriter;
                  import java.util.*;
                   
                  public class B_706 {
                      static PrintWriter pw = new PrintWriter(System.out);
                   
                      public static void main(String arg[]) throws IOException {
                          InputStreamReader isr = new InputStreamReader(System.in);
                          BufferedReader br = new BufferedReader(isr);
                          StringTokenizer token = new StringTokenizer(" ");
                   
                          int n = Integer.parseInt(br.readLine());
                   
                          int i=0;
                          int arr[]=new int[n];
                   
                          token=new StringTokenizer(br.readLine());
                   
                          for(i=0;i<=n-1;i++)
                              arr[i]=Integer.parseInt(token.nextToken());
                   
                   
                          int q = Integer.parseInt(br.readLine());
                          int arrQuerey[]=new int[q];
                   
                          for(i=0;i<=q-1;i++)
                              arrQuerey[i]=Integer.parseInt(br.readLine());
                   
                          getResult(n,q,arr,arrQuerey);
                          pw.close();
                   
                      }
                   
                      private static void getResult(int n,int q,int arr[],int arrQuery[]) {
                          Arrays.sort(arr);
                          int i=0;
                          int x=0;
                   
                          for(i=0;i<=q-1;i++) {
                             int ret=binSearch(arr,n,arrQuery[i]);
                  //            if(ret[1]==1)
                  //                pw.println(ret[0]+1);
                  //            else
                  //                pw.println(ret[0]);
                              pw.println(ret);
                          }
                   
                      }
                      private static int binSearch(int arr[],int n,int x){
                          int start=0;
                          int end=n-1;
                          int mid=0;
                          int pos=-1;
                   
                          while(start<=end){
                              mid=start+(end-start)/2;
                   
                              if(x<arr[mid]) {
                                  end = mid - 1;
                                  pos=mid;
                              }
                   
                              else
                                  start=mid+1;
                          }
                          if(pos==-1){
                             return n;
                          }
                          return pos;
                      }
                   
                   
                  }`,
                  "language":"java",
                  "input":"5\n3 10 8 6 11\n4\n1\n10\n3\n11"
                  });

            var config = {
                  method: 'post',
                  url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
                  headers: { 
                        'Content-Type': 'application/json'
                  },
                  data : data
            };

            axios(config)
            .then(function (response) {
                  console.log(response.data);
            })
            .catch(function (error) {
                  console.log(error);
            });
      }
      catch(err){
            res.send("Error occured ! "+err);
      }
});

module.exports=router;