function recur(arr,sum, target, index, ans)
    {
        if(index===arr.length){
            if(sum ==target) console.log(ans)
            return
        }
        recur(arr,sum,target,index+1,ans)
        recur(arr,sum+arr[index],target,index+1,ans+arr[index]+' ')
    }

    let arr =[1,2,3,4,5,6,7,8]
    recur(arr,0,10,0,'')