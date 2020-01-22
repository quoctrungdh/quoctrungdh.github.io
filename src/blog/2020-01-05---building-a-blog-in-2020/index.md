---
title: Building a portfolio (and a blog) in 2020
date: "2020-01-05"
tags: ["development"]
---

Hi all, bắt đầu 2020 với cảm giác 2019 mình chưa cố hết sức mình cảm giác thật là tệ. Rất nhiều mục tiêu đặt ra, 1 to-do-list dài ngoằng dang dở, 1 cái porfolio site trên github pages bị lãng quên từ hồi đi làm :(. Nói chứ là do lười update quá. Ngẫm nghĩ mãi thì nhớ ra là ấp ủ build 1 cái blog từ lâu mà do lười vẫn chưa làm. Thôi thì start 2020 với cái này cho may mắn :P.

## Why? (Why do you need a blog when there's one thing called Medium)
 - Sharing knowledge. Mình đọc rất nhiều, lúc nào browser tab cũng chen chúc, nhưng chắc dọc nhanh quá rồi đôi khi chỉ nhớ mơ hồ, bới bookmark cũng mệt. Nên chắc personal blog sẽ là nơi mình tổng hợp lại những gì mình tâm đắc, chia sẻ lại cho cộng đồng.
 // Cuối 2019 mình có tham gia 1 buổi phỏng vấn, mình có giới thiệu là mình đọc rất nhiều, anh interviewer có hỏi lại mình đọc nhiều rồi có viết lại cho người khác đọc không, đứng hình mất 5s, vì cái tội lười. Mình cực thích sharing, nhưng trước giờ chỉ internal team sharing và mentor các bạn junior. Mình nghĩ kết quả pv của mình cũng bị ảnh hưởng 1 phân do câu này. Tiếc tím người hết mấy hôm thế là hôm nay bắt đầu khởi động 1 cái gì đó, đóng góp lại cho cộng đồng.

 - Personal blog is a lot cooler. PV với 1 cái CV kèm 1 mớ kiến thức tổng hợp từ blog chắc sẽ khiến không khí buổi trao đổi thoải mái và nhẹ nhàng hơn 1 chút.

 - Lâu rồi chưa build 1 cái gì đó đẹp đẹp, mình thích FrontEnd từ khi xem kênh Deptips. Bác chủ kênh này là 1 designer nên mình cuồng làm việc với cái đẹp từ đây.

## Requirements? Những tính năng cơ bản cho blog mình định làm
 - Đầu tiên là fast and responsive. Blog ít data nên phải làm sao cho nhanh nhanh chút, xem đc trên nhiều thiết bị.

 - Có thể tag. Như đã đề cập ở trên, bookmark mình nhiều quá nên ko có tag chắc ngập đầu. Mình có đi nghía qua vài blog nổi tiếng thì đều có lọc tag, nên ráng làm cho bằng ae.

 - Dễ update, mình là đứa lười, nên blog mà khó update nữa thì chắc lại đóng bụi.

 - Optional: theming, nếu đc ráng thêm mục theme để lấy số ^^.

 ## How?
 Vắt óc set requirements rồi thì bây giờ ngẫm tiếp tech stack để giải quyết:

 - Mình thích đơn giản (và lười) nên ban đầu định tiếp cận với static site thôi, dễ dev, bỏ lên github pages chạy bao nhanh (mình làm React nhưng thấy overkill, server render thì phải tốn tiền nuôi server nữa). Nhưng vấn đề gặp phải là ko làm đc tag. Ngó 1 hồi thì thấy có Gatsby, static site generator, có GraphQL nữa, thôi ráng làm vậy. (hugo, jerkyll phải làm 1 ngôn ngữ khác, debug chết bỏ nên thôi).

 - Update content nhanh gọn chắc chỉ có Markdown

 - Styling thì in tailwindcss we trust (clean and fast AF)

 - Chắc phải ráng mò thêm CI/CD, merge update Markdown vô là tự build & deploy, để dành thời gian chơi món khác.

 Sumup: .md + css -> CI/CD -> cool blog

## When?
 - Sau buổi pv failed cuối 2019 mình có nhận đc feedback sidenote là có thể apply lại sau 6 tháng, nên chắc ráng làm trong est 2 tháng, để dành thời gian chuẩn bị apply lại.

OK, tạm thời số hoá những gì mình đã note trên nháp như vậy, đi nấu cơm rồi mày mò tiếp.