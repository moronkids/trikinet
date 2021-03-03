import Ads from "components/ads";
import ShareButton from "components/share_buttons";
import NewestArticle from "components/article/newestArticle"
const Article = () => {
  return (
    <div className="container article">
      <div className="col-lg-9">
        <Ads type="rectangle" class="mx-auto mt-5" />
        <div className="breadcrumbCustom" style={{ marginTop: "43px" }}>
          Trikinet / Web
        </div>
      </div>
      <div className="w-100 d-flex">
        <div id="leftSide" className="col-lg-9">
          <div className="articleTitle pt-4">
            5 Teknik SEO yang Tidak Lagi Efektif di 2020
          </div>
          <div className="articleKeyword pt-2">
            Teknik SEO 2020 lebih fokus pada kualitas, keamanan dan kecepatan
          </div>
          <div className="pt-3">
            <img
              src="../../assets/mainImageArticle.svg"
              alt=""
              className="articleMainImage"
            />
            <div className="articleContent pt-3">
              <p className="">
                Kita sepakat ya, bahwa SEO terus berkembang seiring dengan
                semakin pandainya mesin pencari Google melalui pembaruan
                algoritma. Kualitas, akurasi dan kecepatan jadi goal dari setiap
                pembaruan.
                <br />
                <br />
                Dan sebagai blogger atau pengelola website, penting sekali
                memastikan setiap strategi SEO yang kita terapkan inline dengan
                goal tersebut.
                <br />
                <br />
                Salah satunya adalah memastikan bahwa teknik optimasi yang kita
                gunakan masih relevan dengan pendekatan SEO terbaru. Bukan lagi
                menggunakan teknik-teknik lawas yang sudah tidak lagi efektif,
                misalnya:
                <br />
                <br />
                <h3 className="font-weight-bold">Keyword on Domain atau KOD</h3>
                {/* <br />
                <br /> */}
                Di era sebelum Google Penguin dirilis, penggunaan keyword di
                dalam domain sangat marak dilakukan. Memang kala itu, ini jadi
                cara yang cukup efektif untuk duduk di peringkat pertama. Jika
                persaingan cukup berat, biasanya cukup dengan menyiram beberapa
                ribu backlink maka posisi akan langsung naik.
                <br />
                <br />
                Tetapi ketika algoritma berkembang, penggunaan keyword sebagai
                domain sudah tidak lagi efektif. Kualitas optimasi on page dan
                baclink berkualitas lebih mendominasi faktor penentu ranking
                pertama. Kedua, cara ini juga tidak efektif dari sisi branding
                karena orang akan kesulitan mengingat sebuah web dengan tiga
                sampai empat kata panjangnya.
                <br />
                <br />
                Baca juga: 4 Faktor SEO Terpenting di Tahun 2020
                <br />
                <br />
                <h3 className="font-weight-bold">Bold, Underline dan Italic</h3>
                Permainan ini juga terbilang teknik lawas yang sudah lama
                ditinggalkan. Sedikit berbeda, teknik ini masih marah digunakan
                bahkan di eranya Google Hummingbird. Padahal, di era itu Google
                sudah mulai memahami topik dalam konten, dan penggunaan bold,
                underline dan italic tidak akan banyak membantu.
                <br />
                <br />
                <div className="w-100 text-center">
                  <img
                    src="../../../assets/imageArticle1.svg"
                    alt=""
                    className="text-center align-center mx-auto"
                    style={{ width: "573px", height: "312px" }}
                  />
                </div>
                <br />
                Justru, mendekorasi keyword dgn ketiga format ini akan memberi
                tahu Google bahwa kita memraktikkan keyword stuffing secara
                agresif.
                <br />
                <br />
                <h3 className="font-weight-bold">
                  Keyword Diulang-ulang Sekian Persen
                </h3>
                Keyword masih penting, karena itu jadi semacam penanda bagi
                sebuah konten. Tanpa keyword, Google tidak mendapatkan penanda
                yang akurat akan konteks sebuah konten. Tapi sekarang cara
                mainnya tidak dengan diulang ulang lagi. Yang paling tepat
                adalah dengan menempatkan di posisi yang potensial saja,
                misalnya di hiperlink, di judul dan heading.
                <br />
                <br />
                Lalu bagaimana caranya agar Google dapat memahami isi konten
                kita tanpa mengulang-ulang keyword?
                <div className="w-100 text-center">
                  <img
                    src="../../../assets/imageArticle2.svg"
                    alt=""
                    className="text-center align-center mx-auto"
                    style={{ width: "573px", height: "312px" }}
                  />
                </div>
                <br />
                Adalah dengan menyematkan kombinasi keyword mulai keyword exact
                atau utama dan bebarapa keyword LSI yang memiliki kedekatan
                makna.
                <Ads type="rectangle" class="mx-auto mt-5" />
                <h3 className="font-weight-bold">Keyword Dijadikan Tags</h3>
                Tags semestinya tidak diindeks, tetapi jika situasinya berbeda,
                misalnya Anda menggunakan keywords sebagai tags dan Google
                mengindeks tags tersebut. Maka tags dan title konten akan saling
                membunuh. Sayangnya, tags relatif lebih didahulukan, sehingga
                konten yang telah dipersiapkan dengan tenaga dan pikiran
                beresiko tidak efektif.
                <br />
                <br />
                <h3 className="font-weight-bold">Backlink Blogroll</h3>
                Jika Anda paham dengan istilah blogroll, maka saya pastikan Anda
                adalah blogger angkatan tua seumur saya.
                <div className="w-100 text-center">
                  <img
                    src="../../../assets/imageArticle2.svg"
                    alt=""
                    className="text-center align-center mx-auto"
                    style={{ width: "573px", height: "312px" }}
                  />
                </div>
                Di banyak platform blog, backlink blogroll diposisikan di tempat
                yang sama, yaitu di sidebar. Ada juga yang menyebutnya dengan
                istilah sidewide links. Banyak blogger kemudian menggunakan
                ruang ini untuk saling bertukar links.
                <br />
                <br />
                Link jenis ini dianggap spammy terutama jika dilakukan dengan
                cara yang tidak organik, termasuk praktik tukar link. Coba kita
                dengarkan apa kata Matt Cutts tentang backlink blogroll.
              </p>
              <ShareButton class="mx-auto my-3 d-flex col-12 mx-1" />
            </div>
          </div>
        </div>
        <div id="rightSide" className="col-lg-3">
          <div className="d-flex articleCategory mt-4">
            <span className="mx-auto my-auto">Web</span>
          </div>
          <div className="writtenBy pt-4">Oleh Bambang Winarso</div>
          <div className="postedTime">2 jam lalu</div>
          <Ads type="square" class="mt-5 mb-5"></Ads>
          <NewestArticle/>
        </div>
      </div>
    </div>
  );
};

export default Article;
