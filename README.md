# 一切有關Docker的問題筆記

1.
搜尋Image
```
docker search -f=stars=10 mongo
```
##### 說明:search 找 -f=stars=10 找前10名 有關於mongo的

2.
[安裝] 或是 [拉取] [提取] 都可以
```
docker pull mongo
```
就是安裝 mongo

3.
查看自己安裝了什麼Image
```
docker images
```
上面已經解釋

4.
執行image
```

```

5.
保持於Volume，具有保存功能，資料不會消失
```
docker volume create --name mongo-data
```
```
docker run -d -p 27017:27017 --name mongodb --restart always -v mongo-data:/data/db mongo

docker run -d -p 27017:27017 --name mongodb --restart always -v $PWD/mongo-data:/data/db mongo
```

* -d ：後台執行 Container (容器) ，並返回ID
* -p 27017:27017 ：將 Container 的 27017 Port 映射到主機的 27017 Port (前面代表主機，後面代表容器)
* -name mongodb ：將 Container 取名為 mongodb
* -restart always ：如果 container 遇到例外的情況被 stop 掉，例如是重新開機，docker 會試著重新啟動此 container

*  第2行 -v mongo-data:/data/db ：使用剛建立的volume，mongo-data 掛載到 Container 的 /data/db。
*  第3行 -v $PWD/mongo-data ：將主機當前目錄下的 /mongo-data 掛載到 Container 的 /data/db。
* mongo ：指定安裝的鏡像mongo

6.
看看mongo有沒有執行
```
docker exec mongodb mongo --eval "print(version())"
```

7.
進入Docker 容器(container) 直接使用
```
docker exec -it mongodb bash
docker exec -i -t mongodb bash
```
以上2種都一樣的

8.
進入Docker的容器，直接操控資料庫
```
root@c0xxw234344:/# mongo
```
執行 mongo
會出現很多敘述，只要看到
MongoDB shell version v5.0.4 基本上是成功!

查看資料庫
```
> show dbs
```

增加資料庫
```
> use MongoDbs
```
就會增加一個MongoDbs，可以用show dbs 看看有沒有出現!

把資料寫入資料庫，注意會順便把資料夾創出來
```
db.people.save({ name: "圭圭", barthdat: "1994.07.18" })
```
那個people就是資料夾，會一同創出來，然後把[name:圭圭,barthday:1999/07/18] 放進標籤people的資料夾


看看剛剛放進去的資料
```
db.people.find({ name: "圭圭" })
```
就會出現
```
{ "_id" : ObjectId("619b0e541cfb95f69e3f8d7a"), "name" : "圭圭", "barthdat" : "1994.07.18" }
```

以上參考
[J.Js 的Blog](https://morosedog.gitlab.io/docker-20190504-docker11/).

