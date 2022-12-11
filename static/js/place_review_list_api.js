

async function review_like_sort(){
    const response = await fetch(`http://127.0.0.1:8000/reviews/1/`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access")
            }
        }
    )
    response_json = await response.json()
    console.log(response_json)

    const rank_cnt = document.getElementById("place-review-cnt")
    rank_cnt.innerText = response_json.like_count_review.length

    response_json.like_count_review.forEach(item => {
        $('#like-rank').append(
            `
            <a class="review-list" onclick="move_review_detail_page(${item.id},${item.place_id})">
                <div class="review-item-user">
                    <div>
                        <img style="width:40px;height:40px; border-radius: 20px;" src="${backendBaseUrl}${item.profile_image}">
                    </div>
                    <div>
                        ${item.nickname}
                    </div>
                </div>
                <div>
                    <div class="review-item-date">
                        ${item.created_at}
                    </div>
                    <div class="review-item-content">
                        ${item.content}
                    </div>
                    <div class="rating">
                        <img src="/images/icon/star.svg" alt="">
                        <div>${item.rating_cnt}</div>
                    </div>
                </div>
            </a>
            `
        )
    })
}
review_like_sort()



async function review_recent_sort(){
    const response = await fetch(`http://127.0.0.1:8000/reviews/1/`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access")
            }
        }
    )
    response_json = await response.json()
    console.log(response_json)

    response_json.recent_review.forEach(item => {
        $('#recent-rank').append(
            `
            <a class="review-list" onclick="move_review_detail_page(${item.id},${item.place_id})">
                <div class="review-item-user">
                    <div>
                        <img style="width:40px;height:40px; border-radius: 20px;" src="${backendBaseUrl}${item.profile_image}">
                    </div>
                    <div>
                        ${item.nickname}
                    </div>
                </div>
                <div>
                    <div class="review-item-date">
                        ${item.created_at}
                    </div>
                    <div class="review-item-content">
                        ${item.content}
                    </div>
                    <div class="rating">
                        <img src="/images/icon/star.svg" alt="">
                        <div>${item.rating_cnt}</div>
                    </div>
                </div>
            </a>
            `
        )
    })
}
review_recent_sort()

function move_review_detail_page(review_id,place_id){
    window.location.href = `/review_detail.html?id=${review_id}&place=${place_id}`

}

function move_review_create_page(){
    location.replace('review_create.html')
}