import Layout from '../../../components/_App/Layout';
import React, { useContext, useEffect } from 'react';
import PageBanner from '../../../components/Common/PageBanner';
import { useTranslation } from 'react-i18next';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';
import { API } from '@escolalms/sdk/lib';
import { FabricPreview } from '@/components/FabricEditor/preview';

const MyCertificates = () => {
  const { certificates, fetchCertificates, fetchCertificate } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [previewData, setPreviewData] = React.useState<any>();

  useEffect(() => {
    fetchCertificates();
  }, []);

  useEffect(() => {
    // certificate && setPreviewData(certificate.value.content);
  }, [certificates]);

  const handlePreview = async (id: number) => {
    const request = await fetchCertificate(id);

    if (request.success) {
      setPreviewData(request.data.content);
    }
  };

  return (
    <Layout>
      <React.Fragment>
        <PageBanner
          pageTitle={t('Navbar.MyCertificates')}
          homePageUrl="/"
          homePageText={t('Home')}
          activePageText={t('Navbar.MyCertificates')}
        />

        <div className="cart-area">
          <div className="container">
            {certificates?.list?.data?.length === 0 ? (
              <p className="text-center">Certificates list is empty!</p>
            ) : (
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">{t('PaymentsPage.TableCols.Created')}</th>
                        <th scope="col">EVENT</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {certificates &&
                        certificates?.list?.data?.map((cert: API.Certificate) => (
                          <tr key={cert.id}>
                            <td className="order-id">{cert.id}</td>
                            <td className="order-created">
                              {new Date().toLocaleDateString('en-US')}
                            </td>
                            <td className="order-price">{cert.template.event}</td>
                            <td className="order-items">
                              <button onClick={() => handlePreview(cert.id)}>preview</button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </form>
            )}
          </div>
        </div>
      </React.Fragment>
      <div style={{ position: 'absolute', top: '-100000px' }}>
        {previewData && (
          <FabricPreview initialValue={previewData} onRendered={() => setPreviewData(undefined)} />
        )}
      </div>
    </Layout>
  );
};

export default MyCertificates;
