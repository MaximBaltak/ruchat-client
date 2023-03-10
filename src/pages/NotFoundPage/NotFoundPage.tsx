import { Container, SxProps } from "@mui/material"
import style from './NotFoundPage.module.scss'
const containerStyleMaterial: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
    rowGap: '49px',
    height: '100%'
}
export const NotFoundPage = () => {
    return (
        <div className={style.notFoundPage}>
            <Container sx={containerStyleMaterial}>
                <p className={style.desc}>
                    <span
                        style={{
                            fontSize: '40px',
                            fontWeight: 700,
                        }}>
                        404</span>страница не найдена
                </p>
            </Container>
        </div>
    )
}