// 문서가 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 관련 요소 선택
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    
    // 현재 슬라이더 인덱스
    let currentIndex = 0;
    
    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        updateSlider();
    });
    
    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });
    
    // 슬라이더 업데이트 함수
    function updateSlider() {
        const itemWidth = sliderItems[0].offsetWidth + 30; // 여백 포함
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    
    // 자동 슬라이드 기능 (5초마다)
    let autoSlideInterval = setInterval(function() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
    
    // 슬라이더에 마우스를 올리면 자동 슬라이드 정지
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });
    
    // 슬라이더에서 마우스가 벗어나면 자동 슬라이드 재개
    sliderContainer.addEventListener('mouseleave', function() {
        autoSlideInterval = setInterval(function() {
            currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
    });
    
    // 캘린더 네비게이션 버튼
    document.getElementById('prev-month').addEventListener('click', function() {
        // 실제로는 이전 달의 데이터를 불러오는 코드가 필요합니다
        alert('이전 달로 이동합니다.');
    });
    
    document.getElementById('next-month').addEventListener('click', function() {
        // 실제로는 다음 달의 데이터를 불러오는 코드가 필요합니다
        alert('다음 달로 이동합니다.');
    });

    // 페이지 로드 시 슬라이더 초기화
    window.addEventListener('resize', function() {
        updateSlider();
    });
    
    // 초기 슬라이더 설정
    updateSlider();
});
// 문서가 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 관련 요소 선택
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    
    // 현재 슬라이더 인덱스
    let currentIndex = 0;
    
    // 이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        updateSlider();
    });
    
    // 다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });
    
    // 슬라이더 업데이트 함수
    function updateSlider() {
        const itemWidth = sliderItems[0].offsetWidth + 30; // 여백 포함
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    
    // 자동 슬라이드 기능 (5초마다)
    let autoSlideInterval = setInterval(function() {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
    
    // 슬라이더에 마우스를 올리면 자동 슬라이드 정지
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });
        
        // 슬라이더에서 마우스가 벗어나면 자동 슬라이드 재개
        sliderContainer.addEventListener('mouseleave', function() {
            autoSlideInterval = setInterval(function() {
                currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            }, 5000);
        });
    }
    
    // 캘린더 관련 변수 및 기능
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentMonth = 0; // 1월부터 시작 (0-based index)
    let currentYear = 2025;
    
    // 캘린더 초기화
    updateCalendar(currentMonth, currentYear);
    
    // 캘린더 네비게이션 버튼
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    if (prevMonthBtn && nextMonthBtn) {
        // 이전 달 버튼 클릭 이벤트
        prevMonthBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateCalendar(currentMonth, currentYear);
        });
        
        // 다음 달 버튼 클릭 이벤트
        nextMonthBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendar(currentMonth, currentYear);
        });
    }
    
    // 캘린더 업데이트 함수
    function updateCalendar(month, year) {
        const calendarTitle = document.querySelector('.calendar-title');
        const daysContainer = document.querySelector('.days');
        
        if (!calendarTitle || !daysContainer) return;
        
        // 캘린더 타이틀 업데이트
        calendarTitle.textContent = `${months[month]} ${year}`;
        
        // 해당 월의 첫 날과 마지막 날 구하기
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        // 첫 날의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
        let firstDayOfWeek = firstDay.getDay();
        // 월요일부터 시작하도록 조정
        firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
        
        // 날짜 셀 생성
        let dayHTML = '';
        
        // 이전 달의 날짜들
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = 0; i < firstDayOfWeek; i++) {
            const day = prevMonthLastDay - firstDayOfWeek + i + 1;
            dayHTML += `
                <div class="day other-month">
                    <div class="day-number">${day}</div>
                </div>
            `;
        }
        
        // 현재 달의 날짜들
        for (let i = 1; i <= lastDay.getDate(); i++) {
            // 이벤트 데이터 (실제로는 서버에서 가져올 수 있음)
            let events = '';
            
            // 예시 이벤트 - 실제 구현에서는 서버에서 데이터를 가져와야 함
            
            
            dayHTML += `
                <div class="day">
                    <div class="day-number">${i}</div>
                    ${events}
                </div>
            `;
        }
        
        // 다음 달의 날짜들
        const daysAfter = 42 - (firstDayOfWeek + lastDay.getDate());
        for (let i = 1; i <= daysAfter; i++) {
            dayHTML += `
                <div class="day other-month">
                    <div class="day-number">${i}</div>
                </div>
            `;
        }
        
        // 날짜 셀 업데이트
        daysContainer.innerHTML = dayHTML;
    }
    
    // 페이지 로드 시 슬라이더 초기화
    window.addEventListener('resize', function() {
        if (sliderTrack && sliderItems.length > 0) {
            updateSlider();
        }
    });
    
    // 초기 슬라이더 설정
    if (sliderTrack && sliderItems.length > 0) {
        updateSlider();
    }
});