# Clush Test Project
회사와 부서를 필터링하고, 페이지 네비게이션을 관리하는 React 컴포넌트들을 포함하고 있습니다.

## 프로젝트 구조
src
 ┣ components                 `UI 컴포넌트가 포함된 폴더`
 ┃ ┣ Content                  `페이지의 콘텐츠 영역을 구성하는 컴포넌트 폴더`
 ┃ ┃ ┣ Board                  `게시판 관련 컴포넌트를 담고 있는 폴더`
 ┃ ┃ ┃ ┣ BoardList.jsx        `게시판 목록 컴포넌트 (회사, 부서, 검색 필터 포함)`
 ┃ ┃ ┃ ┗ Pagination.jsx       `페이지네이션 컴포넌트`
 ┃ ┃ ┣ PageHeader             `페이지 헤더와 검색 필터를 담는 폴더`
 ┃ ┃ ┃ ┣ PageTitle.jsx        `페이지 제목을 표시하는 컴포넌트`
 ┃ ┃ ┃ ┗ SearchFilter.jsx     `회사, 부서 및 검색 필터가 포함된 검색 컴포넌트`
 ┃ ┃ ┗ Content.jsx            `콘텐츠 전체를 감싸는 메인 컴포넌트`
 ┃ ┣ Layout                   `레이아웃 관련 컴포넌트 폴더`
 ┃ ┃ ┣ Navbar.jsx             `내비게이션 바 컴포넌트`
 ┃ ┃ ┗ Topbar.jsx             `상단 바 컴포넌트`
 ┃ ┣ App.js                   `메인 앱 컴포넌트 (앱의 루트 컴포넌트)`
 ┃ ┗ NotFound.jsx             `404 페이지 컴포넌트 (페이지를 찾을 수 없을 때 표시)`
 ┣ img                        `이미지 파일이 저장된 폴더`
 ┣ scss                       `SCSS 스타일 파일 폴더`
 ┃ ┣ content                  `콘텐츠 관련 SCSS 파일`
 ┃ ┃ ┣ Board.scss             `Board 컴포넌트의 스타일 파일`
 ┃ ┃ ┣ PageHeader.scss        `PageHeader 컴포넌트의 스타일 파일`
 ┃ ┃ ┗ SearchFilter.scss      `SearchFilter 컴포넌트의 스타일 파일`
 ┃ ┣ layouts                  `레이아웃 관련 SCSS 파일 폴더`
 ┃ ┃ ┣ Content.scss           `콘텐츠 전체를 감싸는 레이아웃 스타일`
 ┃ ┃ ┣ Navbar.scss            `Navbar 컴포넌트의 스타일 파일`
 ┃ ┃ ┗ Topbar.scss            `Topbar 컴포넌트의 스타일 파일`
 ┃ ┣ utils                    `재사용 가능한 유틸리티 SCSS 파일 폴더`
 ┃ ┃ ┣ Reset.scss             `기본 스타일 초기화(Reset) 파일`
 ┃ ┃ ┣ button.scss            `버튼 스타일 정의 파일`
 ┃ ┃ ┗ mixin.scss             `재사용 가능한 믹스인 정의 파일`
 ┃ ┗ Allcss.scss              `전체 스타일을 통합하는 메인 SCSS 파일`
 ┗ index.js                   `앱의 진입점 파일, App.js를 렌더링`

## 사용된 기술
- **React**: 컴포넌트 기반 아키텍처
- **SCSS**: 스타일링
- **React Hooks (useState)**: 상태 관리

## 컴포넌트 설명

### 1. SearchFilter 컴포넌트

이 컴포넌트는 사용자가 회사, 부서, 검색어를 입력하여 목록을 필터링할 수 있도록 합니다.

- **상태 관리**:
  - `company`: 선택된 회사명
  - `department`: 선택된 부서명
  - `searchTerm`: 입력된 검색어
  - `isCompanyOpen`, `isDepartmentOpen`: 드롭다운의 열림/닫힘 상태
- **기능**:
  - 드롭다운을 통해 회사명과 부서명을 선택할 수 있습니다.
  - 검색어 입력 필드를 통해 검색어를 입력할 수 있습니다.
  - 선택된 값을 초기화하는 리셋 버튼이 있습니다.
  - 폼 제출 시 콘솔에 필터링된 값이 출력됩니다.


### 2. Pagination 컴포넌트

이 컴포넌트는 페이지 네비게이션을 관리하며, 사용자가 원하는 페이지로 이동할 수 있게 합니다.

- **상태 관리**:
  - `pager`: 현재 페이지 번호
  - `isPagerOpen`: 페이지 번호 선택 드롭다운의 열림/닫힘 상태
- **기능**:
  - 페이지 번호를 드롭다운에서 선택할 수 있습니다.
  - 이전/다음 버튼을 클릭하여 페이지를 변경할 수 있습니다.
  - 최대 페이지 수는 현재 `10`으로 설정되어 있으며, 필요에 따라 조정 가능합니다