import React, { useState } from 'react';
import Pagination from './Pagination';

const BoardList = () => {
    const [posts] = useState([
        { company: '클러쉬1', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬2', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬3', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬4', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬5', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬6', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬7', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬8', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬9', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬10', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬11', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬12', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬13', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬14', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬15', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬16', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬17', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬18', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬19', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
        { company: '클러쉬20', department: '클러쉬', cluster: '클러쉬', node: '클러쉬', network: '클러쉬', startDate: '2024.07.11 17:29:09', },
    ]);

    return (
        <div className="board-container">
            <div className="board-header">
                <div className="total-posts">총 {posts.length}건</div>
                <div className="header-buttons">
                    <button className="btn btn-primary small noneSize">클러스터 신청</button>
                </div>
            </div>

            <div className="table-container">
                <table className="board-table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>회사</th>
                            <th>부서</th>
                            <th>클러스터명</th>
                            <th>노드수</th>
                            <th>네트워크</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td><input type="checkbox" /></td>
                                <td>{post.company}</td>
                                <td>{post.department}</td>
                                <td>{post.cluster}</td>
                                <td>{post.node}</td>
                                <td>{post.network}</td>
                                <td className='startDate'>{post.startDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination />
        </div>
    );
}

export default BoardList;