import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "utils/const";
import * as S from "./table-body-style";

function TableBodyData({children, linId, ...props}) {
  const navigate = useNavigate();

  const handleRawClick = () => navigate(AppRoutes.Project(linId));

  return(
    <>
      {
        props.project
        ?
        <S.TableDataProject onClick={handleRawClick} {...props}>{children}</S.TableDataProject>
        :
        <td onClick={handleRawClick} {...props}>{children}</td>
      }
    </>
  )
}

export default TableBodyData;
