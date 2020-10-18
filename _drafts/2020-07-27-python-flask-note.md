---
layout: post
title: 使用 RESTful, SQLAlchemy, marshmallow, Python
categories:
tags:
  - python, flask, SQLAlchemy, marshmallow
---

1. Flask: 是一個非常輕量的 Web 應用框架，可讓使用者快速上手，也可以擴展到複雜或大型的應用程式。

1. flask-restful: 是 Flask 的擴充元件，用於建構 RESTful API。

1. SQLAlchemy: 是一種 ORM (Object Relational Mapping, 物件關聯對映), 可幫助使用者更透過程式語言
(Python, Ruby, Java ...等)，更簡單、安全的操作資料庫。[flask-sqlalchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)、[flask-sqlalchemy-ch](http://www.pythondoc.com/flask-sqlalchemy/binds.html#)
1. [marshmallow](https://marshmallow.readthedocs.io/en/stable/): 是一種 ORM/ODM/framework-agnostic 的函式庫，用放轉換 database 與 Python 原生的資料型態。
1. MongoAlchemh: 功能類似 `SQLAlchemy` 只是資料改操作 MongoDB (NoSQL 資料)。[Flask-MongoAlchemy](https://pythonhosted.org/Flask-MongoAlchemy/)
1. [bcrypt](https://pypi.org/project/bcrypt/): python 的加密工具




__註:__

1. ODM: 原文 Object Document Mapping (物件文檔對映), 是針對 No-SQL 資料處理。

___

ref:

1. [What is the difference between ODM and ORM?](https://medium.com/@julianam.tyler/what-is-the-difference-between-odm-and-orm-267bbb7778b0)
1. [渣翻 marshmallow 文档](https://www.jianshu.com/p/594865f0681b)
1. [How to Build a REST API with Flask and SQLAlchemy](https://rahmanfadhil.com/flask-rest-api/)
