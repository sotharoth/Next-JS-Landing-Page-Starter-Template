import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

import Link from 'next/link';
import {
  MainContentArea,


  ButtonOne,
  SlidePro1,

  VideoMask3,
  ThumPro,
  ThumTitle,
ButtonBtm,


} from '../styles/pages.style';
import { GlobalStyle } from '../styles/global.style';
import Collapsible from 'react-collapsible';
const Base = () => (






      <MainContentArea>
    <Meta title={AppConfig.title} description={AppConfig.description} />
<GlobalStyle />
    <SlidePro1>
      <VideoMask3>
    <img src="https://scontent.fpnh12-1.fna.fbcdn.net/v/t39.30808-6/260384905_191001553199390_4400453164318692921_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHPUTqgrKvZgzjTtP5btnHgBVVsZGY90rMFVWxkZj3Ssz7x2MN7GqZdBJFe1KHvgup0oA0OLLZhq5sv2WMjZOZJ&_nc_ohc=_b-wKFo77UEAX-A6ND_&_nc_ht=scontent.fpnh12-1.fna&oh=1eb3fa4a2b33cb6f04c584793bcc7768&oe=61A21F4E"/>
    <ThumPro>

    <ThumTitle>Active Essence Barrier<br/><span>សេរ៉ូមចិញ្ចឹមស្បែកមុខ់</span></ThumTitle>


    </ThumPro>
    <Collapsible trigger="ចុចមេីល▾">



    <p><br/>បង្កើនរបាំងសំណើមនៃស្បែកនិងចិញ្ចឹមស្បែកដែលអស់កម្លាំងពីបរិយាកាសខាងក្រៅ
    🥰</p>

    <img src="https://firebasestorage.googleapis.com/v0/b/sotharoth-image.appspot.com/o/shakebaby_sub.jpg?alt=media&token=5146f3b9-82d3-423c-8fb1-7ab5af4966ba"/>
      </Collapsible>
      <ButtonBtm>
      <form>



        </form>
      </ButtonBtm>

      </VideoMask3>
    </SlidePro1>

    <Link href="https://m.me/deyaqueenstore">
      <a>
        <ButtonOne type='button' value ="SHAKE BABY ថែម Jelly 3 កញ្ចប់= 30$">SHAKE BABY+Jelly 3 កញ្ចប់= 30$</ButtonOne>
      </a>
    </Link>

      </MainContentArea>








);

export { Base };
