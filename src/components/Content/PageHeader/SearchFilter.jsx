import React, { useState } from 'react';
import ChevronIco from '../../../img/util/ico-chevron-lg.svg';
import RefreshIco from '../../../img/util/ico-refresh.svg';

const SearchFilter = () => {
    // 상태 관리: 회사명, 부서명, 검색어
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // 드롭다운 상태
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);

    // 옵션 데이터
    const companyOptions = ['회사1', '회사2', '회사3'];
    const departmentOptions = ['인사부', '영업부', 'IT부서'];

    // 회사명 드롭다운 클릭
    const handleCompanySelect = (option) => {
        setCompany(option);
        setIsCompanyOpen(false);  // 드롭다운 닫기
    };

    // 부서명 드롭다운 클릭
    const handleDepartmentSelect = (option) => {
        setDepartment(option);
        setIsDepartmentOpen(false);  // 드롭다운 닫기
    };

    // 검색어 입력
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('검색어:', searchTerm, '회사:', company, '부서:', department);
    };

    // 새로고침
    const handleReset = () => {
        setCompany('');
        setDepartment('');
        setSearchTerm('');
    };
    return (
        <form className="filter-search-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>검색어</legend>
                <div className="filter-box">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="company-name">회사명</label>
                            <div
                                className={`custom-select ${isCompanyOpen ? 'active' : ''}`}
                                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                            >
                                <div className="selected-option">
                                    {company || '회사 선택'}
                                    <span><img src={ChevronIco} alt="" /></span>
                                </div>
                                {isCompanyOpen && (
                                    <div className="options">
                                        {companyOptions.map((option, index) => (
                                            <div key={index} className="option" onClick={() => handleCompanySelect(option)}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="department-name">부서명</label>
                            <div
                                className={`custom-select ${isDepartmentOpen ? 'active' : ''}`}
                                onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                            >
                                <div className="selected-option">
                                    {department || '부서 선택'}
                                    <span><img src={ChevronIco} alt="" /></span>
                                </div>
                                {isDepartmentOpen && (
                                    <div className="options">
                                        {departmentOptions.map((option, index) => (
                                            <div key={index} className="option" onClick={() => handleDepartmentSelect(option)}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-group search-group">
                            <label htmlFor="search-term">검색어</label>
                            <input
                                type="text"
                                id="search-term"
                                name="search"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                                className="form-control"
                                placeholder="검색어 입력"
                            />
                        </div>
                    </div>

                    <div className="form-row gap10">
                        <div className="form-group">
                            <button type="button" onClick={handleReset} className="btn btn-reset">
                                <span><img src={RefreshIco} alt="" /></span>
                            </button>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                검색
                            </button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    );
}

export default SearchFilter;