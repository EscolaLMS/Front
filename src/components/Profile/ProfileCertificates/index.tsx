import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { EscolaLMSContext } from '@escolalms/sdk/lib/react';
import { API } from '@escolalms/sdk/lib';
import { FabricPreview } from '@/components/FabricEditor/preview';

import './index.scss';

// TODO: update sdk api certificate with titile field
type CertType = API.Certificate & { title?: string };

const ProfileCertificates = () => {
  const { certificates, fetchCertificates, fetchCertificate } = useContext(EscolaLMSContext);
  const { t } = useTranslation();
  const [previewData, setPreviewData] = React.useState<any>();

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  const handlePreview = async (id: number) => {
    const request = await fetchCertificate(id);

    if (request.success) {
      setPreviewData(request.data.content);
    }
  };

  return (
    <React.Fragment>
      {/* TODO: add translations to all profile pages */}
      <div className="certificates">
        <div className="container">
          {/* TODO:it should be a component wrapper */}
          <h3 className="title">{t('Navbar.MyCertificates')}</h3>
          {certificates?.list?.data?.length === 0 ? (
            <p className="text-center">Certificates list is empty!</p>
          ) : (
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">{t('PaymentsPage.TableCols.Created')}</th>
                      <th scope="col">{t('Title')}</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {certificates &&
                      certificates?.list?.data?.map((cert: CertType) => (
                        <tr key={cert.id}>
                          <td className="order-created">
                            {new Date().toLocaleDateString('en-US')}
                          </td>
                          <td className="order-price">{cert.title}</td>
                          <td className="order-items">
                            <button className="default-btn" onClick={() => handlePreview(cert.id)}>
                              {t('Preview')}
                              <span></span>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </form>
          )}
        </div>
        <div className="fabric-preview-wrapper">
          {previewData && (
            <FabricPreview
              initialValue={previewData}
              onRendered={() => setPreviewData(undefined)}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCertificates;
