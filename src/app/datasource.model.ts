import { Product } from './product.model';


export class SimpleDataSource {
    private products: Product[];

    constructor()
    {
        this.products = new Array<Product>(
            new Product(1,"Samsung s5", "iyi telefon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHVgvhlKhAR4P5v3lxMUiHb79XCAMPHr79_vsPLuMlnScb4y-",1000),
            new Product(2,"Samsung s6", "iyi telefon", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEBIQFRUQEA8QFxAVDxAQFRUQFhcWFhUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGBAQGC0dHR0rLS0tKy0tKy0tLS0tLSstLS0tLS0rLS0tLS0tLS0tLS0tLS0tKy0rLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQEDBAYHAv/EAE8QAAEDAQMFCQoJCgYDAAAAAAEAAgMRBBIhBQYxQVETYXF0gZGhsdEiNVJTc5KTs8HDIyUyNEJictPhBxQVJDNEgqLS8ENUlLTC8Rdjo//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA2EQEAAQMBBAgFBAEEAwAAAAAAAQIDEQQFITFREhQyM0FxgcETFSI0gjVCUqFyI0RhkQYWRf/aAAwDAQACEQMRAD8A7igICAgICAg8TSBoLnEAAEknAAbSm8aras9GF5jssb5nDwWl34DlIWkW5nixrv00cWNNl/KWkWZjRsdJG09ZWlNiZ4OSvaNujijpc68oD/Di9Oz7tbxoqnDVt6zT4Md2eOUPBj9M37pOpTCnz63PgtOz0yhsi9I37pOpSv8APKJ8Fp2fGUBqj9IPu06mn51RPgtnPy3/APr88fdqOprfOKeTyfyg28ao/SD7tOpyvG1qeR/5Ft2tsfpG/dp1NMbWp5PTfykWzXGz0jfu1Xqk+ErfNI8YZEP5SrR9KEH+Nh7E6pUt80tRxhLZO/KRE4gTxllTppQc9SOlYzp66d8ui1rrVycRLd7DbI5mCSJwc06x1HfWLrhkIkQEBAQEBAQEBAQEBAQEGlZ+Wl8r4rBGaGdzWkjVeqanea1jjwuatLceLn1FyaKd3GUtY8nxWWIQwtADRp1k6y46ytqYzLzbuKaeO9C5Wn0r0rFD5jXXp5temK6p3PKiZYLx3V6ppQC7qrtWM0T0s5ehbu0xRFPRWWuAcC4XgNI0VwP4cypNE9CYzvdFN2ibnSmncuSWmzeLP8nYuf4V3+T041Ok/h/TEktFn8Wf5exR8K7zXjU6b+H9MC1vYXVY26KUpXXU472rmW1uJpj6nLeqoqn6YwxXK071aJxMSjsn2J0Zc5zq3q63GuwkHQeBYWrVVNUzMu/U6i3doiKYxhnhdOXAvxFTx3SzmZjg2/8AJ1lM2e07gS65OGkNrUA1ummwhxj5HnYF5mqtdCcw+i2Xqpu0dGrjDrIXG9ZVAQEBAQEBAQEBAQEBAQaXamVyzFX6MdocOSOBo63c63o7EuDU5+LRHmnLaVracGqndLVcqaV6lng+Q1szNWEPMFvMuamJYcgVXRTEs2yW+BkTGvZVzJHP/ZtIODrocTpFS1cly3XNWYl69i9apoiKo3wpNlWyXHtEWLnTkHc24B7i4DkF0DlVIt183RGos9GY6KKyhbYnXi1ukCncNGqh4FPw6+a3xrc/tQtqN41bhjXYqxbrieLSb9uYn6Vpy33uN4oiVQFIvRq25nMJjI1RPZCNO7lvIY3O62NXLrI/04d2yKp6zMf8O4ryX1SqAgICAgICAgICAgICAg0q3u+N28WtB6IV0WuxU87V97R6veVowa4u89w9q1oaTp6KuLVrZZmk6X+kf2roiqVPl9ieNLDdZG/X9I/tV+lKPl+nj9rz+ZM+t6R/akzKOo2Y/a8Gws2O89/amdys6KzyeTk+PYfPf2q2Feq2uT1+jYvBPnv7VWdyvVrfJX9FQ+CfPf2qE9Xt8gZIg8E+e/tTer8GjkoclQBwFw4/Xfp50PhUcl1uRYDoZ/O4e1OCPg0ckjFm1Ze7q4VZGHCkhoXV+SMcVSa6t2EdXto6wwhlrha0UDbU2gqTSsTtvCmonNr1YaSmKdZiP4uzLy30SqAgICAgICAgICAgICChQaHann9Lmp0Q2ocg3GgXTa7MvN1ne2/Vn5QbU0w5TQc6vTLspQFviALKODr4cQRWlQ4tIxWlNTSFk2Zl8RboN0JApdN2+dDb23VwqemiWIW/37FtE5UmHuGyl4kcNEbHPJ4NQ31FVURhSYGwsDWve+7fLwBcLq3aVOH2lE1zPBTC1VtSGmoGulK8inzUmHtFRFJYGUZ7rmnZQ9KtCcJOM15VCkrzGqNykzLBs4/XWcaZ6oqmo7r1c+l+9/F2BeY+hVQEBAQEBAQEBAQEBAQCg59bDTKx8javcrqsx9MvM1s4u20hlDWrxwd9MbkJlFlGwAeDL6xymjxaRDGs9mDXiY/JiIed94xawb5IHAKqZ4YRLzEx76DElz6gar59q0zEQpML2N58TA66yC0Ct093IW0J9g4FlM8JVmGI+dojja6K9cMndGV7PlEHAN0HDSarWY8WaksLWkFtbr2NeK6QDqO0jarU1Z4qVAUqiM5a/lubunDwQ0e1WhMJ3JUt+Jh2tCrKk8UkwJDKUdZx+vM4yz1ZVNR3Xqw0v3n4uvLzH0KqAgICAgICAgICAgICAg0LLdBlUcWnPLSFden7MvK1/eW2XbtJVoelTwQ9tdeuCnyA4cNXF3tUxDV4tE0bi0FkgDRgA9tN86NJTE5VlZBI0FwoScHEUOiuGvUtFJIrRKwuO6SGrHsxkfgSKA6dSjobuCkjDHdAexxphVrgL2vuq699WmJUWJiXOvUAAAa1o0Bo0BTTThSXmilWVHkAEnQASeAYpCkw0y2TlzJZTrLj0fiFZNPFsWakt6EDwXOb0qJZ1xvbJG1MspRkA/X28Yb6oql/uvVz6X7z093XF5j6FVAQEBAQEBAQEBAQEBAKDnWVj8Znydp9yuvT9mXk7Q7y2lLXpUy9WmNyMtBbqaRv1qpjLRavNxqytd8YYKd6JhQuZjRnT/e+pjKkrN1aRLKYLqnKkvBakypLwWplEwhs57Tci3MfKlN3+H6R9nKppVw1/LEe52aNmt72N5zU9ASZKeKRzEmq2Ru/e5yfwU+Ct2N7eYAqueUVCPjBvGG+qKrf7r1c+m+89Pd1lea+hVQEBAQEBAQEBAQEBAQUKDnWWcMpnydp9yuzT9mp5G0e8tpa1jEo9iiNyMmapiWmFktVkTDzdUs5LqlSYVuqYZzDyWqcs8Lb261EGGmh/wCd2ov+g03G/ZGk8qvG5WVnO5w3RjdUMT5jwkEN6KqEU8TMCofQ623OURsd2qZ4IuOjWcKmWEwiYu+A4w31RS93Xq5NN976e7q6819CqgICAgICAgICAgICAgIOf5zH4zbxeX3S7NNwqePtLt2/NJWrSVR7dEbkfIFaJaLRarQrLzdVlJhS6phnKt1MqTDyQpyo1zPHKBjY2zxn4SfDD6Mf0jy6FNKcK5vZPEbWimNKng1f3vKZlnVDWcundBPL4+URN8mMB0DpUwrDOzOio9rtTrVM3kDAz2JPBWri6HE1ZZZ1QhY++LeMD1JVr3c+risbtb+Pu6uvOfQKoCAgICAgICAgICAgICDnudXfJvF5OuFdul4VPG2n27fml7UMSssvdo7KPkCmJaLZCtlWXkhWiUTBRMs5CFOWcrNqmbGx0jzRrGlxO8ER0ctHyUx1qnktUuitQPBYNDRwBaZwvVThsdrcY7NI4YOl+DbvF2A5hUqsb3PU1nKVm7uGIaImhx4Tj1DpVolRJ5rWalnsrvCndJ5z3exTMqzDdIgsoVqhrVuNLY6nhv8A9u5Xu9z6uCz99+Pu69HoHAF5z33pAQEBAQEBAQEBAQEBAQc9zr75N4vJ1wrt0vCp421O3b80zaQsJ4veo4QwXhMtHgtUol5LVeJVl5IU5ZzCgSZVlqOelsL3MsbNZD3/APFvtV4ltRRiMykcn2EMZHCNLu6P2R+KiZY1ruUmbpaI4h8mFt8/bdg3mHWrZYShZ46iebaHkfZ+S3oCtCkwnMl2W5BZm+C2LnwKiZVwnYQs4lWqGr5SH667yj/9s5a3e5jzefZ++/H3deZoHAF5z3XpEiAgICAgICAgICAgICDnmd3fFvFpeuJdul4VPG2p27fmlhKHLmq4voKOELLwoiWmHiitEqyoWq2VVtwU5VwsWuYRMdI7Q1pP4KclNHSnDUc37KZ53TP1uLirTOG9zdGG0ZMF9z5dRNBvMGjtVXHXDAsFXi0T65HPpwDuW+xXyzmGPa7PSB4Gu6z2K2VJhPtioGjZd6FEowzIQqRO5WqGuPHxmzjHuHLa53MebzLP334+7qy897qqAgICAgICAgICAgICAg53nj3xHFpfdLt0vCp421O3b81RadzfdOglc9W99JRTuhIh1RULJaSitEqSoQrZVw8OapyhrOedpoxkI+mbx+yNHT1K0S6NPRxl7yZDuVlJGl9GDl09CTLO5vqSs43KyvI03Lo4TgkS5p4rVlguWdjeDt7FOVJjetyQVZG3bI09P4K+VJShCrMowvwhFJhrcnfRnGPcFb3O59XlW/v/AMfd1Vee91VAQEBAQEBAQEBAQEBAQc8zw74t4vJ1wrt0vZqeLtTt2/NTOCyEE04QfYuTL6m1viGLkbKVe4dpCrK9VKeBqoYzBRTlGHlwU5UloWcUu6Wxw1MIYP4dPTVXiXo26ejbbA8dzDHvXudRlxzHFl5a/ZxM8JwPIP8AsKYlzxG9etGDGN3iVOWc8XrcqXN4A9H4q0SphcdoSZThfhClnVDWpu+kfGfcFb3O49XkW/v5/wAfd1VcD3FUBAQEBAQEBAQEBAQEBBzvPHvgzyEnXCu3S9mp4u1e3b807b4BI0tPIdhXDO6X0lqro4aJlSzujcXAUc04hMvQx0oS+Q8riQXScVDmrowngKplk8uCZMZmHNZDetJcdb3HnJWj0auzDawaytGwNHQocdUfTLIyyfhYm7G15z+CmJc8Rue7U+st3Y1o6FMSyxuSNobQ8GCRKmFhx60ymYZMKvEsqoa1MPjRnGB6grpr7j1eNR9/+Pu6ouB7iqAgICAgICAgICAgICAg53nn3wZ5CTrhXbpezU8Xavbt+bYZta8+p9Fb4Qicr2EStqB3TR5zdnDsVMuu1Xjc0G2XrPJebWhP9haROW1cZbfm/lpsrQCcVFUOeqlOOFRgqwzp4w5jKaTV+stXo1cGyxy/CA7bvUoc1UfSzMrO+HZ9hnWUiXNEblp8v608b7eoKYlSY3J21uwJ30yziGMmUzDLiCvEsaoa2/vmOMD1JXZV3Hq8Sj9Q/H3dSXA9tVAQEBAQEBAQEBAQEBAQc6z0+fs8jJ7lduk4VPF2r27fm2OcLz6pfR2+DEespbQh8u5KbM1zgMTiR/yG+ppqb0V+EtAeZLJLpw1HaFtxgqhvWb2X2zNAJxWdUYZzT4w1DLkdyaQbHu5q4K0S7eNEM7867iKTa1vYjCY3JjKk1dxk2xjoJ7UiXNhiTWilqr4Vw9AUxKsxubNI+rXbzvaomWcQtsKjKaoZsK0plhVG9rcnfMeXb6kruq7j1eDT+ofj7upLhe2qgICAgICAgICAgICAgIOc57fP4/JSe4XbpeFTxdq9u35tomC82p9Fb4QxJGrPLaOSwcFGVkBnFkVszC5ox0kbDtHtCtTU2oqzulzp8ktllpiCDzrbdJMYStototDRLroGuG+NB5R1KvBvTOaXiyzVs7264nnzXYj2qJUjkl7Ha91so2xOpyEdoSJYzG9jWieu5yfVAPC00UxKuG42eW82vhxh3LRRUyxvXIDXoVcprhIxLSmXPMNal75jjDfUlejP28eb5+P1D8fd1JcL2lUBAQEBAQEBAQEBAQEBBzjPf5/H5KT3C7dL2ani7V7drzbXLrXl1PorfCGK8LKZbQsvCjKyw4UU5S1nOjIDZ2FzBRwFaD2byvTU1przHRlzqxyus85ilwD+4O8fonn61tO9an6ZZsU25T3XYNmBiOwO+gefrVJXq3TlkZEtO5zvhdolDm/xjEdIVVK435XmyV3SPW03xwHA9NFOVZhs2bVuvQtxxjcWHg0jrUzO5jMb01ZjiRwrPK1UJWFa0y5qo3tZm75t4w31JXpf7ePN85/9D8fd1NcT2lUBAQEBAQEBAQEBAQEBBzfPj5+zyUnuF26Xs1PF2r27Xm2yXWvJrl9HRwhjOWMtoWnKMrLTwpyMaQEYq2UtXzqzbZamFzAA8AnD2divRVzaROY3uf2uGRzHQygiWIeezQHA9B5FplpjNOJeJrU6WNk4PwkZDX70jdDuAih51BG+Em+1NO5WoYNeKPGwHuZByYnkVVUhkO1blaXwuOErTTZfbiKcIqpUmN7cbBaLwa7WDQ8Iw6llKZjc2CErWmXJXG9rcvfIcYb6kr1f9vHm+bndtH8fd1JcT2VUBAQEBAQEBAQEBAQEBBzfPn5+zyUnuF26Xs1PG2r27Xm2uVePXxfR2+EMdyymW0LRVcpeSpylZkapynDDlZRTlKBzgyG20i+yjZWVLXU0nYeHYr01L01Od2izOgkc4sIB7iWLZ9Zu0VxB5Fo0mMb4eLKbjnWdx7ifuo36hIcByOGHDRMFW5dbI4sa7HdbM4A7aD5B6LvIoZ4bdkTKYdI2hwnaHN+2MadY5FnK3g3vJ8l5o3sOxWply3YxKAm75DjDfUlevH28eb5er9R/H3dTXG9lVAQEBAQEBAQEBAQEBAQc2z5+fs8lJ7hdmm7NTxtqdu35trkK8avi+ko3RCw5ZS2hbKql4KZMPDgpWWZGqRhzRq2RFZXyUy0DGjXgUD9u87aFMVNKKsOe5XyUYKxSAhhODvFuOsHwD0c61iptGJhimVwO6OHdxi5M3w4jokA1nbvjfVmVcYXYZTG4xtdr3aJw1n5RAptAvDgcqzSiJdPzZyo2VjJB9MUcNjxpHOojizuU5WLQfjIcYHqHL1o+3jzfJz+oz/j7uqLkewqgICAgICAgICAgICAgIOa59fP2eSk9wuzTdmp421O3b824QsDiddASBtK8jjL6L9sFpDSwuFARQGgpiaYFRXEYTTM5YBXK6cPJUpeCg8kJlKy9itkYssKnKc4YltsLJ2GOQVFKA0xH4K0VJirDnmXsgS2RwcMWCtyTSA0/QftZ1LWmptmKmdmpZIxBLPubZHxTsjijeCdyc6hc0004mrTyLalyXoxVhstltse5tnMbYTJMIXAAsaZKVBp0Ka6eTKivE8VGPJt8ZP8AmOqzv7F30/bR5vm7n6lP+Pu62uR66qAgICAgICAgICAgICAg5pn38/Z5KT3C7NN2anjbT7dvzbU8kGoJBGvD+yvFmZpl9LERNMLckj3fKdWmoNDRXbvlZVVzK9NEQtlZNVCpHkhTlLyQgoWqci26NBYfCpFuSBr2ljwC06irRMwdKYadlPItpsDzabC6rSKOjIq0sBrdcN7GhGLdWGC6Ldaa4i5GPFD2/Ks1qo6dxIAIdGGBlB4xrRokbhUVO0aV1074ck0dGU1kKV7p7OZCC7dyLw+kBBJR3KACu6rHwI83zk/qM/4+7ti4HsKoCAgICAgICAgICAgICDnOeLA/KMTDrZM0006LOfau7RxnMPA25XNFNFUeDJtFleMfzi0eczsUxpLdXGHJXtfUU0ZiUTIZv8zPzs7F0Rs2zPg83/2XW57X9MaSecfvE/nN7Fb5ZY5Naf8AyLWT+7+mO+22gfvE3O3sVJ2bZ5NKdvayf3LD8o2kfvEvO3sVZ2fZjwa07c1c+K07KVr8dP0f0qvUtPydEbV1s+K0/K9sH+NNzDsUdT0/JeNp6zmsnLlr8fJzt7FMaGxyPmupjxeHZetfj5OdvYk6G1yPm2o5vP6ctXjpOdvYnUbPJPzbUc1Rl21YjdpMcKdz2KY0NqPA+bajmx2CrrxreNDWusLanTW44MKtq6nml8gxBktnDRQCaR3/AMZaqmqpim1ERzTs29Ve1c1VT4O3ryX1CqAgICAgICAgICAgICAg5v8AlC+AttlmPyZLwvar1AHA8jYzyFdekrxXifF4+2rE3LEzTxhmPtAcyo2L0ooxL4+5eibaLeuqODzKd8sS0Up+NUy6IYEirLaGP+diM0IBMlWtJAIBpU4HCpCxudrD0tPExTM075hafa3+E7zndqdGk+Jc8Vh9oedLnece1R0aV4ruMKeUVDLoq6rr2ugFKHo5lnj6sQ6aczbmaloq+9koFI9NCZRMsmJW8WVSdzXZutts8ABOD3u3m9zUn+G95wXFrq47L1tjWJ6c3PR2heY+kVQEBAQEBAQEBAQEBAQEGDlfJsdpjMbwNoNAaOoRXmJHKpiZjgiqmJjEtBtWRLXZagNvxjQcTQcI9vOvSta3hFT5jXbA6dU1Wp4+DANpca/Bvw1dyfauuNXbeNVsLU0zwY0sjvFy+if7Ap61bI2TqI/axnud4EvoZexR1i3zaRs6/H7WLK0nTHKcQf2EunzVWq7bnxb29JqaN8RK09r/ABcvoJf6VSblHN0RZv8A8Vssl1Rzf6eX+lR06Oa8Wb38Vl1lmJruU/8Ap5f6Ui5RG/KarF6rjCn6Pn8TP6CXsU/Go5qxpLvDCv6Ln8TN6Jw61Hx6F40d3kuNyVOMTE8U2lg63J1ihPUL07sJXJWbNqmpdZQHXQuP9I5TyLKvWRj6W1rZNcz/AKk/9On5r5ussbK0BkIoXaSATUiuuppU7w2Lz665qnMvdtWqbdPRpTyo1EBAQEBAQEBAQEBAQEBB5KiUSKU+KPylpHArK1Iq36G8CsmlESqsnjLGcppR4LEiIWXKFoW1M8ESuR6VWFfBI2VWkbFk3S3hVJSnykL0gUeKHpSlQIKoCAgICAg//9k=",2000),
            new Product(3,"Samsung s7", "iyi telefon", "data:image/jpeg;base64,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",3000),
            new Product(4,"Samsung s8", "iyi telefon", "data:image/jpeg;base64,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",4000),
            new Product(5,"Samsung s9", "iyi telefon", "data:image/jpeg;base64,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",5000)

          /*  const Array =[
               {id:1,name:"samsung",description:"iyi",imageUrl:"1.jpg", price:2222},
               {id:2,name:"samsung",description:"iyi",imageUrl:"2.jpg", price:2232}
           ]

           this.products=Array; */
        );
            
    }


             getProduct(): Product[] {

                return this.products;
            }

            getProductById(id:number):Product{
                return this.products.find(p=>p.id==id);
            } 


}