import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const BaltimoreRavensQBs = () => {
  const qbs = [
    {
      name: 'Lamar Jackson',
      number: 8,
      profileLink: '/nfl/ravens/lamar-jackson',
      headshot: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA8PDxAQDw4PDw8PEBIQDw8PEBAQFRYWFxUSFRYYHSggGBonGxUWITEiJSkrLi4uFx81ODMsNygtLisBCgoKDg0OGBAQGi0mIB0tLS0rLSstLS0tLS0rKy0tLSsrLS0tLSsrLSsrLTcrKy0tLSstNystKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIDBQYDBQYEBwAAAAABAAIRAwQSITEFIkFRYQYHE3GBoTKRsRVCweHwI1JicoLxFDNT0SQ1Q2OSorL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAMAAwACAwEAAAAAAAAAAQIDERIhMRNBBFFhIv/aAAwDAQACEQMRAD8A3YYpYFYAnCuhXgTDFZhTAQV4FIMU8KlCJV4EYVZCIQV4UYVbhRhQVwjCrIThBWGqQaphqcIK8KlhU4ThBXhRhVkLHuL2jT/zK1Kn/PUY36lBZhTwrXv7RWYaXm7t8LdSKrDHoCsOl212e7S7pjON7E36hOjeYU4VVpfUawxUatOq3nTe149ismEFeFGFWQnCCvCjCrMKMKCvCjCrIRCCvCjCrIRhQV4UsKuwowoKcKMKthGFBSWowq0tSwoKixGFWwjCgxoQApAJwgUJwnCYCBQnClCcIIYUQpwnCCEIhShEIIhqcKUIhAgmAmApQgjC5ftV22oWW42K9xluAw1mub3cPLVYfeH2wFox1tbu/wCLOHGQCfBY6c5/fPAdZXkObnE6kuc6HGYmTJJ1cotG82x2xvbnE11Z1Km504af7Nscst4jzK0JGIyQXnXE4n8f90OqNERLju7x9xCW848zMxwz5Dgqi9lJxa8YQIDTkwZ5jj6qrC6dGug9M1m2lJ7BVyOFzYAPn/dYhtXADdg6A/j0Ud9rXG8FN5pnEMVMyDIJzjqM11fZ/t9dWzmtrON1RJaMNR28BzZU/ArlG1nN0Mt3oxCQQSnTLXZZNyOvwu+anqr6D2HtqheU/EoOkjJ7Dk+m7k4fjoVsYXzvsjadWzrU6tFxaWuBOpDhxY+DvNzK9z7L7fp39AVqe68HDVYTJY8RI6jkVaUbYBEKUJwpEIRhUyEQghhRCnCIQQhEKcIhBCEEKcIIQV4UEKcIhBXCIU4RCDEAThNNAoTQpAIAIhEJoCEoTTQRhOFIBEIFCAFNCBALG2pfNt6FWu/4aTHPPWNB+HqsuFxXe5dhmz/C4161Nvo04z/8hKPIL67dcVateod97i98k5u4x8wOGihhL8h8EktHEefNRGe6NG59QTqFsLMAH9arLLLi+GPVVvs6TEf36rcUdmkAZNJI1J0VdN+cLbWdMuyg8JgkQOawuy11Y65FDdnF0EvgcQSc45EKTtnE5+I3KRmI1XSWdicHw73AQTEqi8sSDOH5l0deKr2r+McldbNjPC3lAPvmFra2zvMCOIldPdUyBmByyla9x9FaZ1TLXHPvpeHrmwkSPnoun7uNuG0vGNdHgXOGm/MSCSfDd/5Zf1LQXTd4g6ZrCpuw4sIONhD2un4Q3T3zXRjXJlOV9OohYmx7sV7ehWGlWjTf6lolZi0QSIThNEIwiE0IkoRCkkgSE0IIwiFJCCKUKSSDETCAFIIgoTCEBA0JwgIEnCaaBAJphCAQmhALzrvlI8G0b941n5aGAw/7hejLyTvguZvLemRu0aDnzrON3Ef0KKPP7fMnzWwt25rE8J1Ko+nUGF7HEOH64LMtGkgnLPILDNvrZ9Gnot/sjhJMdIlaKhTe0boDuMQR+S3mytpMhrXMEic/hIHA/Me6wsdErrdlFrt1058YOs+nJYO1mAYoBI/mg/JW2t7RyILhPvyz1Ubu+pDLM5/eJ081HlGnjXP3lKQTnqtRXows7aW0HPIZTwtHTXqT81r6tICMVXE7+YQpnOKW9au8pa8+XNaymd+NQ7IjTyC3F4wjexSOuq1jKDXNr1HEg0vDwiJBc54BB9JXRg5dse7d3VTFsy04lrCw9C1xEey6WFyvdeSdm0sX+rXjKIGMwurW0ZIwiFJCkRhOE0IFCITQgUIhNCBQkpJFBFCcIhBhqSimEQaEICCQTASCkgSaEIGhCYQJSCIQoSYC8P7x3n7TqzIc2nT4kzDXQR7L3ELxnvZo4dpMdnD7ZhGUfCXCAQoo4y4uX1nmtVe6pUed5ztSeCzN5oECfJVstx4DH8S5uY4A/wBlsbWnigcFz7K6deBWZew0qhZ4gL3B7A0vqAASCJ3Vn3OznuYyrDab3tc5zGB7XME5FzXZHLWCSOSsFsWnDTfUnLJsQrb2jUZT38YxmCXGCen5KnlOc40mu971Rs+s9pYRm6ATOYlX7SL3YiQMRBIjSVCwpF7hgBgZaalZd7bvZm4GOoWP7byemDabPc2m59KqBckB1MEABzZEy4nKROQ+qxruhUe176hwVXVCWtx46TWcG5yStlZsxhzC0ugyNfwzB8lbSsac5tdPCSXemea18/XGX4/fXOPonAZWjqsznkecc12F/SA6awuZqtEv57p4ZGYOvRaa8mO7F7p3b/8ALbfdw51QM5xDG6HE9V0y57u9A+zbPDBHhZwZzkyuihdMcxITQgSE4QgSE0IEhNBUiKE0lASE0lIwQpBIBMIgKQCAEwEAFJATAQJNShNQEAmmiESUJgITQAXl/fTbQbKvmQ01KR5ZgGD8l6jC4rvepNOzXOPxU61FzD1LgD7FKPJnscym+k4EEObA03IDmmPIhSsa+8vTrbsZQvqdreeLVZ4tpQFRjcBD8LAMnH4TAjj6LyNu6YOoyWOWDbHZzjuNibSAeZgdcpHXNY21rx9WrjbvtaSGtc7n949VrNjZ4jybKjUvM+AAyz1JWHL8dXlPtbTZu0a9JxcKWn+nmR6LKvNqXFaHYIGk1THyAWs2deAGS8D/ANjmsq8uWZHxZI54Q0+gU+CPP/U6VarjDjhaQNQC0O6RKyrraZyDgBIyOS0rr6PvDTU8fVFR+JgdJOcGYy8lW41PnFG0rudFpzn1LtIEk9PZWXBzK9t7I7DtjYWlZtvR/wAQ+xpsNXw2eIXGnB3omZkc1vrw9ObZn2od1tTFsyjl8FSuwEcQ15zXWgLje6ZmHZxpnJ9O6uGPE/C4OGS7NbsAhCEAhNCBITSQKEQmhBEhJSKSBJJpIMFSUUwiEgpBRUkDUgohSCBpoCESaaQThAIThAQAXBd5VSpWpV6Qt6rqNtQdVc8iKZqOAayP3sILneccl3qxdsU8VtcNyGKjVGeQEtKDV7CeKGyaDgZ8Oxa+QAc/DnTReBvnInUgE+cCV7ncHBsPOGRs1ms5fswvDqo0PQfRUyWxjZ7GqiYdpoR0TubBgeSMUGTrMTyWstqmFw5HJb2j+0AHEZBZZem+HK2exabgAafgmAf82kyoDlGeU8uKz6hqtYZNtAMyy2pNdqcswRH5LTssn8HOnmN0+yBa1SDic4CYAJlV615P6Yd3Zte7MFxyEiGjjwAHP6Kd5hp02saIDAfmeKyvCLBLzmBy4rS7VrzlzKT3Vc5JGFMn1Xr/AHR7U8S3r2xIxW9YuaP+3UGLPydi9l5BQEldd3dXzrbaFPHu0b2nUotc7JhqMMNxHhvZf1BbY325svj0Lu7c00r3AcTftK7IdEYgXSCurXP9ibNtK3qhpBBu7l26ZE+IQY6ZLoFooE0JoEhBQgEIQgSE0kCSTKSASTSQa8FSCgFMIgwphQUggkFIKKkESkEJBSCACkEgmgEITQCx9o2njUatHEWeLTfTxDPDiETCyEwg4ntpUq2+xKzaxa+rhbRcWtDGkOcGggA5CF5NTpBzV6p3wBzrOhRaRNa7psAJiciZ8hkV5hYaZGQCQOonIrPbeNdX1rK9IsPqtrsq5zGeXHzWRXtg9sRmtI/FRdBEtKpOZRa/8Xr0G3rgsnEJBzDY+quF00ggmImMuPquCobWLcnOOY8phH2yc+p48FXwX/Li3u164EgH9c1zVd+N+WmijUun1MhJnUnMrO2bZSQSrSeKtvnfS20tobK3VDwa+yrmhiYL20ruu7ZpJDzThpqFnPR2XSVTWpQI6LUvZRwVzUNZtwGtNq6md0nMPY/kC069CmF7U7MeYvduyNuynZWzKfw+E0nexbxzJnjmVuFxndhtCibGhQbctq3DW4n0y6KlOfuwc4C7NdHHMEIQoAhCEAhCECQhCBFKUFJAnOhCaSDXBSaVEJohMKYVbVMIlOVIKAUwgYUkgmgkEICEAmkqLq8p0hNWoymIJ33Nbp0KkZHXh7Bcd2g7waFDFTtx/iawkSDFFrh+8/j5Bcf2x7YPvYo02mlatc4nePiVhoC6Mg3p1zXNsGgH6C6MNH7oo23te4v6pq3L8ZYMLWtBbTaM8mt9U7B2ibmgExoT7ptpwZGix36OY9xaa7ytlTKxtpWwe2fyVlL6rJFORh/NcPx087HJPoEGI6KVG0c7X3XRGzz9VNtIDKPZW/LWX4Z1rre1jTj0hbizpQJj1VVKgSVmObAgf3WdtraTjHru1Wpq08TgOua2NZUU6fE6n2C6P4+Hlkz2X0i2lBDmktcDIIJBB5gjRdPsTtrdWxh7jc0ojDVccY6tfr6GVzqAvW8MbHK9z2VtWlc02VKT2nE0EtxDG08WkaghZy+f6Lyx7ajCWVGGWuGTmnoV2mw+8Kqwht40VqeniMaG1R1I0d7eq5stFnwemIWFsvatG5ZjoVG1BxAMOb0c3Vvqs1Yc4BCElAEihJAJIQgSSZSQa0FSCgCpBELGqQUAphEphTCgFIIJhNRCkgkET+ui1e3NvUbNmKs7ePwU251HnoOA6nJeVdqO1txeSwuNGif+lTcRI/jdq76LTDXch6H2j7Z29sxzaVSncXOjaTHh0E8XkfCAvKtoXL673VarjUquJJcfoBwERkFh2lOBpHoriuvXqmAgDOfoUojy4JfC7+F3sVdh5rUVEcOWqbTw6ow8PkeCbOPoo4L7d8a6fRbKkR+uK1IV1tclp+o4FcW/+JMveH1vr289VtCwFSwDRToXFOoAJDHcWnj5HRZ32aXQR05Ly88csLzKOucvxrwANFXmTkFuDYNYCXuDQ0SZ0+a0N7fA7lOcPF0QXeXJX1astt5IpszmM9se7cJgHTU9eQVQUFIHivb1a5rx5HFnlcr7BRCaFoqCEimkEFlldPovFSk806jTuuaYPkeY6Feh7D7w6bmht4003jLxKbS5jhzIGbfdeckJQs89cy+j3ew2jRuG4qFVlUfwOBI8xqFkrwG3rPpuD6b3U3j7zHFp9tV23Z/vAqB1OleNa5jiGmsN1zZ+84aEeS58tFnwejFCQcCAQQQRII0I5oXOBJCEAopkqKDVhTBQhBNpVgKEIJhTCSEE2rz7tf26rUq1S2tGsAp7r67hjOLKQ0aCJ1PEIQttOMt9jhq9y+o41Kr3VKjs3PeSST+A6KjBJzQhdouaEQhCkVV2SD8x6KVJ0gHoE0IJEKI1z/NCEDB4pvSQgk2eCy7TaFankxxzIGEy4Z9E0KmWGOXqxbG2e4je3FWoSKpdibIwkFoaRqMPBY6EKcZMfUiO2+6EIQrIMFNCEAUBCEDlCEIFCTvwKEIPR+7bbfiUzaVDv0hipE/epnVv9J9iu1QhcG2cyoEpQhZCKSaEH//Z'
    },
    {
      name: 'Josh Johnson',
      number: 2,
      profileLink: '/nfl/ravens/josh-johnson',
      headshot: ''
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Baltimore Ravens — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>

        <div className="qb-grid">
          {qbs.map((qb) => (
            <a className="qb-card" href={qb.profileLink} key={qb.name}>
              <div className="qb-photo">
                {qb.headshot ? (
                  <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" />
                ) : (
                  <div className="qb-photo--ph" aria-hidden="true" />
                )}
              </div>
              <div className="qb-info">
                <div className="qb-name">{qb.name}</div>
                {qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaltimoreRavensQBs;
