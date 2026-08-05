outer folders
1)features -for devloping all the features
2)routes for -> appRoutes,pubicProtectedRoutes,privateProtectedRoutess
3)app for -> layout,store or context
4)pages for common pages like home,about,contact us
5)shared -> for shared features
6)config for -> axios instance
7)utils for -> functionality which is used accross the platform(time ko formate karna etc)
8)services

now the 4-layer will be in features and shared folder which will be as 
a)ui -> presentation layer(uske andar who hi phir 2 folder hoge components and pages)
b)hook -> business layer(custom hooks)
c)api -> data fetching layer
d)state -> data handeling layer(for passing data in redux or context)